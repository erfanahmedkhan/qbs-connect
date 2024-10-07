import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesAllocationComponent } from './employees-allocation.component';

describe('EmployeesAllocationComponent', () => {
  let component: EmployeesAllocationComponent;
  let fixture: ComponentFixture<EmployeesAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesAllocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeesAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
