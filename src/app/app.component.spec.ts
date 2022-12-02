import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BoardRowCellComponent } from './board/board-row/board-row-cell/board-row-cell.component';
import { BoardRowComponent } from './board/board-row/board-row.component';
import { BoardComponent } from './board/board.component';
import { SelectionButtonComponent } from './selection/button/button.component';
import { SelectionGridComponent } from './selection/grid/grid.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        BoardComponent,
        SelectionGridComponent,
        SelectionButtonComponent,
        BoardRowComponent,
        BoardRowCellComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Soundoku'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Soundoku');
  });

  xit('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain(
      'Soundoku app is running!'
    );
  });
});
