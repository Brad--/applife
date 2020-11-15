import Router from 'express-promise-router';
import DB from '../db';

const kanban = Router();

const KANBAN_TABLE = 'kanban_columns';

kanban.get('/', async (req, res) => {
    const rows = await DB(KANBAN_TABLE)
                        .where({ userid: 'default'})
                        .orderBy('id');
    res.send(rows);
});

kanban.post('/', async (req, res) => {
    if (!req.body || !req.body.title) {
        console.log(req.body);
        res.status(400).send('"title" is required');
        return;
    }
    const kanbanColumn = {
        // TODO probably need to use this later, use 'default' for now
        userid: 'default',
        title: req.body.title
    };
    const dbRes = await DB(KANBAN_TABLE).insert(kanbanColumn);
    console.log(dbRes);
    res.status(200).send('success');
});

export default kanban;