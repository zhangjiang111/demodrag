import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalsortingComponent } from './horizontalsorting.component';

describe('HorizontalsortingComponent', () => {
  let component: HorizontalsortingComponent;
  let fixture: ComponentFixture<HorizontalsortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizontalsortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizontalsortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
