const { Pool } = require('pg');
const pgtools = require('pgtools');

async function run() {
    const pool = new Pool();

    console.log('Creating Database ');
    const config = {
        user: '',
        password: 'postgres',
        host: 'localhost',
        port: 5432
    };
    const db_name = 'applife';
    pgtools.createdb(config, db_name, (err, res) => {
        if (err) {
            console.log('rekt');
            console.log(err);
            process.exit(-1);
        }
        console.log(res);
    });
    // WIP here

    console.log('Creating kanban table');
    const res = await pool.query(`CREATE TABLE kanban(
        ID   SERIAL PRIMARY KEY NOT_NULL
        DATA JSON               NOT_NULL
        )`);
    console.log(res);


    console.log('Create dummy item');
    res = await pool.query(`INSERT INTO kanban(DATA) values ('[{
        title: 'Planned',
        cards: [{
        details: 'Make the Kanban board'
        }, {
        details: 'Push to GitHub'
        }]
    }, {
        title: 'In Progress',
        cards: [{
        details: 'Yeehaw'
        }]
    }, {
        title: 'Done',
        cards: []
    }]')`);
    console.log(res);
}

run();