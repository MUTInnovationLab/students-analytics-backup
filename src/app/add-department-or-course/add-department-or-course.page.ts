import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-department-or-course',
  templateUrl: './add-department-or-course.page.html',
  styleUrls: ['./add-department-or-course.page.scss'],
})
export class AddDepartmentOrCoursePage implements OnInit {

 courseName: any;

  showAddDepartment: boolean = false;
  showSelectDepartment: boolean = false;
  newDepartment: string = '';
  selectedDepartment: string = '';
  departments: string[] = ['HR', 'Finance', 'IT', 'Marketing'];


  constructor() { }

  ngOnInit() {
  }


  newCourse: any;
  
  courses: string[] = [];

  addCourse() {
    if (this.selectedDepartment || this.newDepartment) {
      this.courses.push(this.newCourse);
    }
  }

  toggleViews() {
    this.showAddDepartment = !this.showAddDepartment;
    this.showSelectDepartment = !this.showSelectDepartment;
  }
}
