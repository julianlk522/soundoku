import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { SelectionGridComponent } from './selection/grid/grid.component';
import { SelectionButtonComponent } from './selection/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SelectionGridComponent,
    SelectionButtonComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
