import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclemovableComponent } from './circlemovable.component';

describe('CirclemovableComponent', () => {
  let component: CirclemovableComponent;
  let fixture: ComponentFixture<CirclemovableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CirclemovableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclemovableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
