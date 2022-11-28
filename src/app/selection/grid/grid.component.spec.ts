import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectionGridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: SelectionGridComponent;
  let fixture: ComponentFixture<SelectionGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectionGridComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
