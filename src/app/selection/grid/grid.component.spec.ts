import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectionButtonComponent } from '../button/button.component';

import { SelectionGridComponent } from './grid.component';

describe('GridComponent', () => {
  let component: SelectionGridComponent;
  let fixture: ComponentFixture<SelectionGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectionGridComponent, SelectionButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectionGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
