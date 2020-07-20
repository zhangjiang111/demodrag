import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionlockingComponent } from './positionlocking.component';

describe('PositionlockingComponent', () => {
  let component: PositionlockingComponent;
  let fixture: ComponentFixture<PositionlockingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PositionlockingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionlockingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
