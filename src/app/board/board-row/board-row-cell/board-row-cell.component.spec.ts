import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRowCellComponent } from './board-row-cell.component';

describe('BoardRowCellComponent', () => {
  let component: BoardRowCellComponent;
  let fixture: ComponentFixture<BoardRowCellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardRowCellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardRowCellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
