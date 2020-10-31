const Router = require('express-promise-router');
const db = require('../db');

const router = new Router();

module.exports = router;

router.get('/doot', async (req, res) => {
    const { rows } = await db.query('SELECT NOW() as now', []);
    res.send(rows);
});