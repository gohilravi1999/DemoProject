import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RejectedOrderComponent } from './rejected-order.component';

describe('RejectedOrderComponent', () => {
  let component: RejectedOrderComponent;
  let fixture: ComponentFixture<RejectedOrderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RejectedOrderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RejectedOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
