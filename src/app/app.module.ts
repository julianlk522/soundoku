import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SelectionGridComponent } from './selection/grid/grid.component';
import { SelectionButtonComponent } from './selection/button/button.component';
import { BoardRowComponent } from './board/board-row/board-row.component';
import { BoardRowCellComponent } from './board/board-row/board-row-cell/board-row-cell.component';
import { GameOverMessageComponent } from './game-over-message/game-over-message.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SelectionGridComponent,
    SelectionButtonComponent,
    BoardRowComponent,
    BoardRowCellComponent,
    GameOverMessageComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
