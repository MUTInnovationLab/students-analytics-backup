import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import {DataService} from '../shared/data.service';
import {UsersService} from '../shared/users.service';

@Component({
  selector: 'app-add-department-or-course',
  templateUrl: './add-department-or-course.page.html',
  styleUrls: ['./add-department-or-course.page.scss'],
})
export class AddDepartmentOrCoursePage implements OnInit {

  courseName: any;
  newCourseAbbreviation: any;
  newCourseModules: any;
  newCourseCredits: any;
  newCourseDescription: any;

  showAddDepartment: boolean = false;
  showSelectDepartment: boolean = false;
  newDepartment: string = '';
  selectedDepartment: string = '';
  departments: string[] = ['HR', 'Finance', 'IT', 'Marketing'];
  department_Name: string='';
  department_Abbreviation: string='';
  department_Description: string='';

  constructor(private modalController: ModalController,
    private data: DataService) {}

  ngOnInit() {
  }

  newCourse: any;
  courses: any[] = [];

  addCourse() {
    // (this.selectedDepartment || this.newDepartment) &&
    if ( this.courseName && this.newCourseAbbreviation && this.newCourseModules && this.newCourseCredits && this.newCourseDescription) {
      const course = {
        department: this.department_Abbreviation,
        name: this.courseName,
        abbreviation: this.newCourseAbbreviation,
        modules: this.newCourseModules,
        credits: this.newCourseCredits,
        description: this.newCourseDescription
      };
      this.courses.push(course);
      this.data.addCourse(course);
      
      this.courseName = '';
      this.newCourseAbbreviation = '';
      this.newCourseModules = '';
      this.newCourseCredits = '';
      this.newCourseDescription = '';
    }
    else{
      alert('All fields are reqiured');
    }
  }

  toggleViews() {
    this.showAddDepartment = !this.showAddDepartment;
    this.showSelectDepartment = !this.showSelectDepartment;
  }

  closeModal() {
    this.modalController.dismiss();
  }

  add_department(){
      if(this.department_Name!=='',this.department_Abbreviation!=='',this.department_Description!==''){
        const departmentData = {
        department_Name: this.department_Name,
        department_Abbreviation: this.department_Abbreviation,
        department_Description: this.department_Description,
        uid:''
      };

      if(this.showAddDepartment){
        this.addCourse();
      }
    
      this.data.addDepartment(departmentData);
      alert('Successfully');
}

  else{
    alert('All fields are required');

  }
}
}

