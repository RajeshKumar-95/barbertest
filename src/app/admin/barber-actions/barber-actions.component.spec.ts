import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarberActionsComponent } from './barber-actions.component';

describe('BarberActionsComponent', () => {
  let component: BarberActionsComponent;
  let fixture: ComponentFixture<BarberActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarberActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BarberActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
