import { KanbanCard } from './../kanban-card/kanban-card.model';
export class KanbanColumn {
    title: string;
    cards: KanbanCard[] = [];

    constructor(data: Partial<KanbanColumn>) {
        Object.assign(this, data);
    }
}
