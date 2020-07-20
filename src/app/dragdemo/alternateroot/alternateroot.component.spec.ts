import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlternaterootComponent } from './alternateroot.component';

describe('AlternaterootComponent', () => {
  let component: AlternaterootComponent;
  let fixture: ComponentFixture<AlternaterootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlternaterootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlternaterootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
