import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerRattingComponent } from './customer-ratting.component';

describe('CustomerRattingComponent', () => {
  let component: CustomerRattingComponent;
  let fixture: ComponentFixture<CustomerRattingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerRattingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerRattingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
