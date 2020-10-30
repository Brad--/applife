export class KanbanCardModel {
    details: string;

    constructor(data: Partial<KanbanCardModel>) {
        Object.assign(this, data);
    }
}
