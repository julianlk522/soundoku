import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AudioContextService } from '../audio-context.service';
import { BoardRowCellComponent } from './board-row/board-row-cell/board-row-cell.component';
import { BoardRowComponent } from './board-row/board-row.component';

import { BoardComponent } from './board.component';

describe('BoardComponent', () => {
  let component: BoardComponent;
  let fixture: ComponentFixture<BoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BoardComponent, BoardRowComponent, BoardRowCellComponent],
      providers: [AudioContextService],
    }).compileComponents();

    fixture = TestBed.createComponent(BoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('start, board and solution properties should range 1-9 instead of default 0-8', () => {
    expect(
      component.start.filter(
        (val: number | null) => val !== null && (val < 1 || val > 9)
      ).length
    ).toBe(0);
    expect(
      component.board.filter(
        (val: number | null) => val !== null && (val < 1 || val > 9)
      ).length
    ).toBe(0);
    expect(
      component.solution.filter(
        (val: number | null) => val !== null && (val < 1 || val > 9)
      ).length
    ).toBe(0);
  });

  it('fillCellsToDecreaseDifficulty method should result in a board with 50 filled cells', () => {
    const startingFilledCells = component.sudoku
      .makePuzzle()
      .map((cell: number | null) => (cell === null ? -1 : cell))
      .filter((cell: number) => cell > 0).length;
    expect(startingFilledCells).toBeLessThan(50);

    component.fillCellsToDecreaseDifficulty();
    const filledCellsAfterFuncCall = component.start
      .map((cell: number | null) => (cell === null ? -1 : cell))
      .filter((cell: number) => cell > 0).length;

    expect(filledCellsAfterFuncCall).toBe(50);
  });

  xit('handleCellSelected method should invoke the audioContext service play() method only if the cell has a number value', () => {
    spyOn(component, 'handleCellSelected');
    spyOn(component.audioContext, 'play');

    component.handleCellSelected({ overallIndex: 10, value: false });
    expect(component.handleCellSelected).toHaveBeenCalled();
    expect(component.audioContext.play).not.toHaveBeenCalled();

    component.handleCellSelected({ overallIndex: 10, value: 7 });
    expect(component.audioContext.play).toHaveBeenCalled();
    expect(component.audioContext.play).toHaveBeenCalledWith(7 - 1);
  });
});
