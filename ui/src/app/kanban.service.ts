import { KanbanColumnModel } from './kanban/kanban-column/kanban-column.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  constructor(private http: HttpClient) { }

  get(): Observable<KanbanColumnModel[]> {
    return this.http.get<KanbanColumnModel[]>('/api/kanban');
  }
}
