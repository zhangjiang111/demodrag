import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelayeddraggingComponent } from './delayeddragging.component';

describe('DelayeddraggingComponent', () => {
  let component: DelayeddraggingComponent;
  let fixture: ComponentFixture<DelayeddraggingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelayeddraggingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelayeddraggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
