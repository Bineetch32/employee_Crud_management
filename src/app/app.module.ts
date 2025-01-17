import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CourseDetail1Component } from './components/dashboard/course-detail1/course-detail1.component';
import { CourseDetail2Component } from './components/dashboard/course-detail2/course-detail2.component';
import { CourseDetail3Component } from './components/dashboard/course-detail3/course-detail3.component';
import { CourseDetail4Component } from './components/dashboard/course-detail4/course-detail4.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmployeeComponent } from './components/employee/employee/employee.component';
import { CompanyComponent } from './components/company/company/company.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    DashboardComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    CourseDetail1Component,
    CourseDetail2Component,
    CourseDetail3Component,
    CourseDetail4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FontAwesomeModule

  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
