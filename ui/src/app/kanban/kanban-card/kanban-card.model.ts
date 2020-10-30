export class KanbanCard {
    details: string;

    constructor(data: Partial<KanbanCard>) {
        Object.assign(this, data);
    }
}
