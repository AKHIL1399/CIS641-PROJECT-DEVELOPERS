import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreCheckComponent } from './pre-check.component';

describe('PreCheckComponent', () => {
  let component: PreCheckComponent;
  let fixture: ComponentFixture<PreCheckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreCheckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreCheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
