import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisabledsortingComponent } from './disabledsorting.component';

describe('DisabledsortingComponent', () => {
  let component: DisabledsortingComponent;
  let fixture: ComponentFixture<DisabledsortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisabledsortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisabledsortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
