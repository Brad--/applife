import Router from 'express-promise-router';
import DB from '../db';

const kanban = Router();

const KANBAN_TABLE = 'kanban_columns';
const TASK_TABLE = 'kanban_task';

kanban.get('/', async (req, res) => {
    const rows = await DB(KANBAN_TABLE)
                        .where({ user_id: 'default'})
                        .orderBy('id');
    res.send(rows);
});

interface TaskGroup {
    id: number;
    tasks: any[];
}

function uniqueFilter(value, index, self) {
    return self.indexOf(value) === index;
}

function sortTasksByGroup(tasks) {
    let groups: TaskGroup[] = [];
    // Group tasks by kanban_id
    tasks
    .map(task => task.kanban_id)
    .filter(uniqueFilter)
    .forEach(id => {
        groups.push({
            id: id,
            tasks: tasks.filter(task => task.kanban_id === id)
        });
    });
    return groups;
}

kanban.get('/board/:userid', async (req, res) => {
    const kanbansForUser = await DB(KANBAN_TABLE)
                                    .where({ user_id: 'default'})
                                    .pluck('id');
    const tasks = await DB(TASK_TABLE)
                            .whereIn('kanban_id', kanbansForUser);
    res.status(200).send(sortTasksByGroup(tasks));
});

kanban.post('/', async (req, res) => {
    if (!req.body || !req.body.title) {
        res.status(400).send('"title" is required');
        return;
    }
    const kanbanColumn = {
        // TODO probably need to use this later, use 'default' for now
        user_id: 'default',
        title: req.body.title
    };
    await DB(KANBAN_TABLE).insert(kanbanColumn);
    res.status(200).send('kanban column created successfully');
});

export default kanban;