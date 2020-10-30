import { KanbanCard } from './kanban-card.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent implements OnInit {

  @Input() card: KanbanCard;

  constructor() { }

  ngOnInit(): void {
  }

}
