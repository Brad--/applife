
import kanban from './kanban';
import task from './task';
import { Router } from 'express';

const routes = Router();

routes.use('/kanban', kanban);
routes.use('/task', task);

export default routes;