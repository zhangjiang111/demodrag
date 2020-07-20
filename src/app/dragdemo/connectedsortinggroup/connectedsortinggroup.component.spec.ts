import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectedsortinggroupComponent } from './connectedsortinggroup.component';

describe('ConnectedsortinggroupComponent', () => {
  let component: ConnectedsortinggroupComponent;
  let fixture: ComponentFixture<ConnectedsortinggroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConnectedsortinggroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnectedsortinggroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
