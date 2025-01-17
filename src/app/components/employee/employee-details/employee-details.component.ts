import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../service/common.service';
import { Employee } from '../../../model/employee';
import { Location } from '@angular/common';

@Component({
  selector: 'app-employee-details',
  standalone: false,
  
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.css'
})
export class EmployeeDetailsComponent implements OnInit  {

  constructor(private route:ActivatedRoute, private common:CommonService,private locations:Location) { }
 

  employeeObj = {
    id: 0,
    ename: '',
    email: '',
    mobile: '',
    designation: '',
    username: '',
    password: ''
  };

  ngOnInit(): void {
    // // First Way Is Snapshot
    // let id = this.route.snapshot.params['id'];
    // this.common.getDataById(id).subscribe((data:Employee)=>{
    //   this.employeeObj = data;
    // })

    // Second Way Is Observable
    this.route.params.subscribe((params)=>{
      let id = params['id'];
      this.common.getDataById(id).subscribe((data:Employee)=>{
        this.employeeObj = data;
      })
    })

  }
  getback(){
    this.locations.back();
  }
}
