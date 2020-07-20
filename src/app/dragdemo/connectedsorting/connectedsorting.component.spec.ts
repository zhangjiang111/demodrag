import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedsortingComponent } from './connectedsorting.component';

describe('ConnectedsortingComponent', () => {
  let component: ConnectedsortingComponent;
  let fixture: ComponentFixture<ConnectedsortingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedsortingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedsortingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
