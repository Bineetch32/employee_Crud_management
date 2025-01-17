import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-register',
  standalone: false,
  
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  registerForm:FormGroup;

  constructor(private fb:FormBuilder,public s:CommonService, private r:Router) { }

  ngOnInit(): void {

    this.registerForm=this.fb.group({
      id:[null],
      ename:[''],
      email:[''],
      mobile:[''],
      designation:[''],
      username:[''],
      password:[""]

      });
  }

  onSubmit(){
    alert("Data Submitted Successfully")
   this.s.postdata(this.registerForm.value).subscribe();
    this.r.navigate(['login'])
  
  }
}