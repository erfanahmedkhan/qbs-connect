import { Routes } from "@angular/router";
import { EmployeesListComponent } from "./employees-list/employees-list.component";
import { EmployeesAttendanceComponent } from "./employees-attendance/employees-attendance.component";
import { EmployeesAllocationComponent } from "./employees-allocation/employees-allocation.component";

export default [
    {
        path: 'employees-list',
        component: EmployeesListComponent
    },
    {
        path: 'employees-attendance',
        component: EmployeesAttendanceComponent
    },
    {
        path: 'employees-allocation',
        component: EmployeesAllocationComponent
    }
] as Routes;