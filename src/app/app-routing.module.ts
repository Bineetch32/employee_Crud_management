import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { headerRoutes } from './components/header/header-routing.module';
import { CourseDetail1Component } from './components/dashboard/course-detail1/course-detail1.component';
import { CourseDetail2Component } from './components/dashboard/course-detail2/course-detail2.component';
import { CourseDetail3Component } from './components/dashboard/course-detail3/course-detail3.component';
import { CourseDetail4Component } from './components/dashboard/course-detail4/course-detail4.component';
import { HeaderComponent } from './components/header/header/header.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
{path:'login/register', component: RegisterComponent},
{path:'login/header', component:HeaderComponent,
  
  children:headerRoutes},
{ path: 'dashboard/course-detail1', component: CourseDetail1Component },
{ path: 'dashboard/course-detail2', component: CourseDetail2Component },
{ path: 'dashboard/course-detail3', component: CourseDetail3Component },
{ path: 'dashboard/course-detail4', component: CourseDetail4Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
