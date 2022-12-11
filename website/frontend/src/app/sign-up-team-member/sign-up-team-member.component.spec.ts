import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpTeamMemberComponent } from './sign-up-team-member.component';

describe('SignUpTeamMemberComponent', () => {
  let component: SignUpTeamMemberComponent;
  let fixture: ComponentFixture<SignUpTeamMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignUpTeamMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpTeamMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
