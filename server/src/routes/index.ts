
import kanban from './kanban';
import { Router } from 'express';

const routes = Router();

routes.use('/kanban', kanban);

export default routes;