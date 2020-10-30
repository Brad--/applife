import { KanbanCardModel } from '../kanban-card/kanban-card.model';
export class KanbanColumnModel {
    title: string;
    cards: KanbanCardModel[] = [];

    constructor(data: Partial<KanbanColumnModel>) {
        Object.assign(this, data);
    }
}
