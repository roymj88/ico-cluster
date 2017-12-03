import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicNavBarComponent } from './public-nav-bar.component';

describe('PublicNavBarComponent', () => {
  let component: PublicNavBarComponent;
  let fixture: ComponentFixture<PublicNavBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublicNavBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicNavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
