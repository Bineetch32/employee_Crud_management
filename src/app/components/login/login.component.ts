import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../service/common.service';
import { Employee } from '../../model/employee';
import { faLock } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  faLock = faLock;
  loginForm: FormGroup;
  userType: any;

  constructor(private fb: FormBuilder, private r: Router, private s: CommonService) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: '',
      password: ''
    });
  }

  onLoginSubmit() {
    this.s.getData().subscribe((data: any) => {
      const employees: Employee[] = data;

      const employee = employees.find(e =>
        e.username === this.loginForm.value.username &&
        e.password === this.loginForm.value.password
      );

      if (employee) {
        console.log('Login Success');
        alert('Login Success');
        this.r.navigateByUrl('login/header');
      } else {
        console.log('Login Failed');
        alert('Invalid username or password');
      }
    });
  }
}
