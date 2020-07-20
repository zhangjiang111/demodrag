import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WithhandleComponent } from './withhandle.component';

describe('WithhandleComponent', () => {
  let component: WithhandleComponent;
  let fixture: ComponentFixture<WithhandleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WithhandleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WithhandleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
