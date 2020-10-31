import { Pool } from 'pg';

const pool = new Pool();

class DB {
    // TODO not any
    public static query(text: string, params: []): any {
        return pool.query(text, params);
    }
}

export default DB;