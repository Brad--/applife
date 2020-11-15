import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';

class App {
    public express;

    constructor () {
        this.express = express();
        this.express.use(bodyParser.json());
        this.express.use(routes);
        // this.express.use(bodyParser.urlencoded({ extended: true}));
    }
}

export default new App().express;