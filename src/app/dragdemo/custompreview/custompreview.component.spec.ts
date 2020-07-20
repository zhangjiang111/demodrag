import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustompreviewComponent } from './custompreview.component';

describe('CustompreviewComponent', () => {
  let component: CustompreviewComponent;
  let fixture: ComponentFixture<CustompreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustompreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustompreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
