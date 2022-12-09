import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOverMessageComponent } from './game-over-message.component';

describe('GameOverMessageComponent', () => {
  let component: GameOverMessageComponent;
  let fixture: ComponentFixture<GameOverMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameOverMessageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameOverMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
