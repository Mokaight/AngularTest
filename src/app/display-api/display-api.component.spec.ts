import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAPIComponent } from './display-api.component';

describe('DisplayAPIComponent', () => {
  let component: DisplayAPIComponent;
  let fixture: ComponentFixture<DisplayAPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayAPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayAPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
