import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesAttendanceComponent } from './employees-attendance.component';

describe('EmployeesAttendanceComponent', () => {
  let component: EmployeesAttendanceComponent;
  let fixture: ComponentFixture<EmployeesAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeesAttendanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmployeesAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
