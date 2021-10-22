import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneGameComponent } from './one-game.component';

describe('OneGameComponent', () => {
  let component: OneGameComponent;
  let fixture: ComponentFixture<OneGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
