import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../../../service/common.service';
import { Employee } from '../../../model/employee';

@Component({
  selector: 'app-employee-list',
  standalone: false,
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent implements OnInit {
  emp: Employee[] = [];
  searchText = '';

  constructor(public cs: CommonService, private router: Router) { }

  ngOnInit(): void {
    this.cs.getData().subscribe((data: Employee[]) => {
      this.emp = data;
    });
  }

  getFilteredEmployees(): Employee[] {
    const search = this.searchText.toLowerCase();

    if (!search) {
      return this.emp;
    }

    return this.emp.filter(e =>
      e.ename.toLowerCase().includes(search) ||
      e.email.toLowerCase().includes(search) ||
      e.designation.toLowerCase().includes(search) ||
      e.username.toLowerCase().includes(search)
    );
  }

  viewEmployee(id: number): void {
    this.router.navigate(['/login/header/employee/employee-detail', id]);
  }

  editEmployee(employee: Employee): void {
    this.router.navigate(['/login/header/employee/update'], {
      state: employee
    });
  }

  deleteData(id: number): void {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.cs.deleteData(id).subscribe({
        next: () => {
          this.emp = this.emp.filter(e => e.id !== id);
          alert('Employee deleted successfully.');
        },
        error: () => {
          alert('Employee could not be deleted. Please check the server.');
        }
      });
    }
  }
}
