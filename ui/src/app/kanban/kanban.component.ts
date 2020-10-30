import { KanbanService } from './../kanban.service';
import { KanbanColumnModel } from './kanban-column/kanban-column.model';
import { Component, OnInit } from '@angular/core';
import { KanbanCardModel } from './kanban-card/kanban-card.model';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  columns: KanbanColumnModel[] = [];

  constructor(
    private kanbanService: KanbanService
  ) { }

  ngOnInit(): void {
    this.kanbanService.get().subscribe((columns) => this.columns = columns);
  }

}
