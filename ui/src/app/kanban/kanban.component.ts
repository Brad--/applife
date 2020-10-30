import { KanbanColumn } from './kanban-column/kanban-column.model';
import { Component, OnInit } from '@angular/core';
import { KanbanCard } from './kanban-card/kanban-card.model';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  columns: KanbanColumn[] = [{
    title: 'Planned',
    cards: [{
      details: 'Make the Kanban board'
    }, {
      details: 'Push to GitHub'
    }]
  }, {
    title: 'In Progress',
    cards: [{
      details: 'Yeehaw'
    }]
  }, {
    title: 'Done',
    cards: []
  }];

  constructor() { }

  ngOnInit(): void {
    console.log(this.columns);
  }

}
