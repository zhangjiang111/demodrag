import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomplaceholderComponent } from './customplaceholder.component';

describe('CustomplaceholderComponent', () => {
  let component: CustomplaceholderComponent;
  let fixture: ComponentFixture<CustomplaceholderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomplaceholderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomplaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
