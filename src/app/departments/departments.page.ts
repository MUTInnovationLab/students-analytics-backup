import { Component, OnInit } from '@angular/core';
import { department} from 'src/app/module/Department.mode';


@Component({
  selector: 'app-departments',
  templateUrl: './departments.page.html',
  styleUrls: ['./departments.page.scss'],
})
export class DepartmentsPage implements OnInit {

  departments: department[] = [
    {
      name: 'Information Technology',
      numberOfCourses: 0,
      purpose: 'understanding technology',
      uid: ''
    },
    {
      name: 'Marketing',
      numberOfCourses: 5,
      purpose: 'promote and advertise products or services.',
      uid: ''
    },
    {
      name: 'Human Resources',
      numberOfCourses: 2,
      purpose: 'The purpose of the Human Resources department is to manage employee recruitment, training, relations, and other personnel-related activities within the organization.',
      uid: ''
    }
  ];
  
  constructor() { }

  ngOnInit() {
  }
viewCourses(number: number){
  alert('Viewed'+number);
}
}
