import Router from 'express-promise-router';
import DB from '../db';
import kanban from './kanban';

const task = Router();

const TASK_TABLE = 'kanban_task';

task.get('/:id', async (req, res) => {
    const task = await DB(TASK_TABLE)
                        .where({ id: req.params.id});
    res.send(task);
});

task.post('/', async (req, res) => {
    if (!req.body || !req.body.description || !req.body.kanban_id) {
        res.status(400);
        res.status(400).send('"description" and "kanban_id" are required');
    }
    const createTask = {
        kanban_id: req.body.kanban_id,
        description: req.body.description
    };
    await DB(TASK_TABLE).insert(createTask);
    res.status(200).send('task created successfully');
});

export default task;