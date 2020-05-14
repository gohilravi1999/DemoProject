import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicHomepageComponent } from './public-homepage.component';

describe('PublicHomepageComponent', () => {
  let component: PublicHomepageComponent;
  let fixture: ComponentFixture<PublicHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
