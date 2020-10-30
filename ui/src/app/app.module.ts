import { KanbanCardComponent } from './kanban/kanban-card/kanban-card.component';
import { KanbanColumnComponent } from './kanban/kanban-column/kanban-column.component';
import { KanbanComponent } from './kanban/kanban.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    KanbanComponent,
    KanbanColumnComponent,
    KanbanCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
