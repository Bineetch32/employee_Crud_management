import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../service/common.service';
import { Employee } from '../../../model/employee';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit{
emp:Employee[];

  constructor(public cs:CommonService) { }

  ngOnInit(): void {
    this.cs.getData().subscribe((data:Employee[])=>{
 
      this.emp=data;})}

  // deleteData(id:number){
  //   this.cs.deleteData(id).subscribe((data:Employee[])=>{
  //     this.emp=data;})}

      deleteData(id:any){
        this.cs.deleteData(id).subscribe();
        window.location.reload();
      }

  }

