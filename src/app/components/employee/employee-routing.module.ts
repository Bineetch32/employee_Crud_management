import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee/employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:"", component: EmployeeComponent,
    children:[
      {path:"", redirectTo:"employee-list", pathMatch:"full"},
      {path:"employee-list", component: EmployeeListComponent,
       children:[
      {path:"employee-detail/:id", component: EmployeeDetailsComponent},
      {path:"update", component: UpdateEmployeeComponent}
     ]
      },
    ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
