import Router from 'express-promise-router';
import DB from '../db';

const kanban = Router();

const KANBAN_TABLE = 'kanban';

kanban.get('/', async (req, res) => {
    const rows = await DB(KANBAN_TABLE).orderBy('id');
    res.send(rows);
});

kanban.post('/kanban', async (req, res) => {
    // TODO create item
});

export default kanban;