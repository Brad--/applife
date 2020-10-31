import Router from 'express-promise-router';
import DB from '../db';

const kanban = Router();

kanban.get('/', async (req, res) => {
    const { rows } = await DB.query('SELECT NOW() as now', []);
    res.send(rows);
});

export default kanban;