import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoardRowCellComponent } from './board-row/board-row-cell/board-row-cell.component';
import { BoardRowComponent } from './board-row/board-row.component';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardComponent, BoardRowComponent, BoardRowCellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
