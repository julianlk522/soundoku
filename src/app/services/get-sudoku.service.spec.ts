import { TestBed } from '@angular/core/testing';

import { GetSudokuService } from './get-sudoku.service';

describe('GetSudokuService', () => {
  let service: GetSudokuService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSudokuService);
    spyOnAllFunctions(service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('makePuzzle should return a solvable sudoku board', () => {
    describe('should not create repeated numbers', () => {
      it('in any rows', () => {
        const rows: number[][] = [];
        for (let r = 0; r < 9; r++) {
          rows[r] = [];
        }
        //  rows: [[], [], etc..]

        service.makePuzzle().forEach((val: number | null, index: number) => {
          if (val === null) return;
          expect(rows[Math.floor(index / 9)].includes(val)).toBeFalsy();
          rows[Math.floor(index / 9)].push(val);
        });
      });

      it('in any columns', () => {
        const cols: number[][] = [];
        for (let r = 0; r < 9; r++) {
          cols[r] = [];
        }
        //  cols: [[], [], etc..]

        service.makePuzzle().forEach((val: number | null, index: number) => {
          if (val === null) return;
          expect(cols[index % 9].includes(val)).toBeFalsy();
          cols[index % 9].push(val);
        });
      });

      it('in any local boxes', () => {
        const boxes: number[][] = [];
        for (let r = 0; r < 9; r++) {
          boxes[r] = [];
        }
        //  boxes: [[], [], etc..]

        service.makePuzzle().forEach((val: number | null, index: number) => {
          if (val === null) return;
          expect(
            boxes[
              Math.floor((index % 9) / 3) + 3 * Math.floor(index / 27)
            ].includes(val)
          ).toBeFalsy();
          boxes[Math.floor((index % 9) / 3) + 3 * Math.floor(index / 27)].push(
            val
          );
        });
      });
    });
  });

  describe('getSolution should return a complete and valid board', () => {
    it('should return an array with no null values', () => {
      service.getSolution(service.makePuzzle()).forEach((cell: any) => {
        expect(typeof cell).toBe('number');
      });
    });

    describe('should not create repeated numbers', () => {
      it('in any rows', () => {
        const rows: number[][] = [];
        for (let r = 0; r < 9; r++) {
          rows[r] = [];
        }
        //  rows: [[], [], etc..]

        service
          .getSolution(service.makePuzzle())
          .forEach((val: number | null, index: number) => {
            if (val === null) return;
            expect(rows[Math.floor(index / 9)].includes(val)).toBeFalsy();
            rows[Math.floor(index / 9)].push(val);
          });
      });

      it('in any columns', () => {
        const cols: number[][] = [];
        for (let r = 0; r < 9; r++) {
          cols[r] = [];
        }
        //  cols: [[], [], etc..]

        service
          .getSolution(service.makePuzzle())
          .forEach((val: number | null, index: number) => {
            if (val === null) return;
            expect(cols[index % 9].includes(val)).toBeFalsy();
            cols[index % 9].push(val);
          });
      });

      it('in any local boxes', () => {
        const boxes: number[][] = [];
        for (let r = 0; r < 9; r++) {
          boxes[r] = [];
        }
        //  boxes: [[], [], etc..]

        service
          .getSolution(service.makePuzzle())
          .forEach((val: number | null, index: number) => {
            if (val === null) return;
            expect(
              boxes[
                Math.floor((index % 9) / 3) + 3 * Math.floor(index / 27)
              ].includes(val)
            ).toBeFalsy();
            boxes[
              Math.floor((index % 9) / 3) + 3 * Math.floor(index / 27)
            ].push(val);
          });
      });
    });
  });
});
