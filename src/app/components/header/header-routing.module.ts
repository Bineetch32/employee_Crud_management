import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../about-us/about-us.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

export const headerRoutes: Routes = [
  {path: '',redirectTo:'dashboard',pathMatch:'full'},
  {path:"dashboard",component: DashboardComponent},
  {path:"about-us",component: AboutUsComponent},
  {path:"contact-us",component: ContactUsComponent},
  {
    path:"company",
    loadChildren:()=>import('../company/company.module').then(module=>module.CompanyModule)
  },
  {
    path:"employee",
    loadChildren:()=>import('../employee/employee.module').then(module=>module.EmployeeModule)
  },
  {path:"**",component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forChild(headerRoutes)],
  exports: [RouterModule]
})
export class HeaderRoutingModule { }
