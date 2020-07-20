import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EvenpredicateComponent } from './evenpredicate.component';

describe('EvenpredicateComponent', () => {
  let component: EvenpredicateComponent;
  let fixture: ComponentFixture<EvenpredicateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EvenpredicateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EvenpredicateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
