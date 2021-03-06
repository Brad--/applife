import { KanbanColumnModel } from './kanban-column.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-column',
  templateUrl: './kanban-column.component.html',
  styleUrls: ['./kanban-column.component.scss']
})
export class KanbanColumnComponent implements OnInit {

  @Input() column: KanbanColumnModel;

  constructor() { }

  ngOnInit(): void {
    console.log(this.column);
  }

}
