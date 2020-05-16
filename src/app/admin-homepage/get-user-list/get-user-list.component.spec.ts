import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserListComponent } from './get-user-list.component';

describe('GetUserListComponent', () => {
  let component: GetUserListComponent;
  let fixture: ComponentFixture<GetUserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
