import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  course = [
    {
      'id': 1,
      'name': 'Learn Angular',
      'description': 'This course teaches Angular from basic to advanced level by creating a Customer data entry project.',
      'image': '../../assets/angular.jpg'
    },
    {
      'id': 2,
      'name': 'Learn Typescript',
      'description': 'You will learn how to apply the JavaScript. This will help you build your own programming experience and give your code more structure.',
      'image': '../../assets/typescript.jpg'
    },
    {
      'id': 3,
      'name': 'Learn Nodejs',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'image': '../../assets/nodejs.jpg'
    },
    {
      'id': 4,
      'name': 'Learn Reactjs',
      'description': 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      'image': '../../assets/reactjs.jpg'
    }
  ];

}

