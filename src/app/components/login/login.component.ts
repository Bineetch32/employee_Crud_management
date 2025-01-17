import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { faLock } from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-login',
  standalone: false,
  
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  faLock = faLock;
loginForm:FormGroup;
userType: any;

  constructor(private fb:FormBuilder, private r:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:'',
      password:''
    });
  }

  onLoginSubmit(){

   if(this.loginForm.value.username=='user' && this.loginForm.value.password=='user123'){
    console.log('User Login Success');
    alert('User Login Success');
    this.r.navigateByUrl('login/header'); 
  }
  else{
    console.log('User Login Failed');
    alert('User Login Failed')
  }
}

}
