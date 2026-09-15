import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../service/common.service';
import { Employee } from '../../model/employee';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  employees: Employee[] = [];
  totalEmployees = 0;
  totalDesignations = 0;

  constructor(private cs: CommonService) { }

  ngOnInit(): void {
    this.cs.getData().subscribe((data: Employee[]) => {
      this.employees = data;
      this.totalEmployees = data.length;

      const designations: string[] = [];
      data.forEach(e => {
        if (e.designation && !designations.includes(e.designation)) {
          designations.push(e.designation);
        }
      });
      this.totalDesignations = designations.length;
    });
  }
}
