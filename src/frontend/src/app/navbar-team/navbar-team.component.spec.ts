import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarTeamComponent } from './navbar-team.component';

describe('NavbarTeamComponent', () => {
  let component: NavbarTeamComponent;
  let fixture: ComponentFixture<NavbarTeamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavbarTeamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
