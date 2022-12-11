import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLogoutComponent } from './navbar-logout.component';

describe('NavbarLogoutComponent', () => {
  let component: NavbarLogoutComponent;
  let fixture: ComponentFixture<NavbarLogoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarLogoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarLogoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
