import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../../service/common.service';
import { Location } from '@angular/common';
import { Employee } from '../../../model/employee';

@Component({
  selector: 'app-update-employee',
  standalone: false,
  
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent implements OnInit {
  updateForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public cs: CommonService,
    private locations: Location,
    private r: Router
  ) {}

  ngOnInit(): void {
    this.updateForm = this.fb.group({
      id: null,
      ename: '',
      email: '',
      mobile: '',
      designation: '',
      username: '',
      password: '',
      
    });

    //Load existing employee data into the form
    // if (this.cs.e) {
    //   console.log('Data for edit:', this.cs.e);
    //   this.updateForm.patchValue(this.cs.e);
    // } else {
    //   console.error('No employee data found in the service.');
    // }
this.editData();
  }

  editData(): void {
    const empObj: any = this.locations.getState();
  
    if (empObj.id !== 0) {
      console.log('Editing employee with ID:', empObj.id);
  
      // Patch form values in a single operation
      this.updateForm.patchValue({
        id: empObj.id,
        ename: empObj.ename,
        email: empObj.email,
        mobile: empObj.mobile,
        designation: empObj.designation,
        username: empObj.username,
        password: empObj.password,
      });
  
      console.log('Form data set for editing:', empObj);
    } else {
      console.error('Invalid employee data:', empObj);
    }
  }
  

  onSubmit(){
    this.cs.updateData(this.updateForm.value).subscribe();
    this.r.navigate(['login/header/employee/employee-list'])
  .then(() => {
    window.location.reload();
  });
    
  }
  
  goBack(): void {
    this.locations.back();
  }
}