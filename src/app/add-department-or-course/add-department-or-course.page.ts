import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

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

  constructor(private modalController: ModalController) {}

  ngOnInit() {
  }

  newCourse: any;
  courses: any[] = [];

  addCourse() {
    if ((this.selectedDepartment || this.newDepartment) && this.courseName && this.newCourseAbbreviation && this.newCourseModules && this.newCourseCredits && this.newCourseDescription) {
      const course = {
        name: this.courseName,
        abbreviation: this.newCourseAbbreviation,
        modules: this.newCourseModules,
        credits: this.newCourseCredits,
        description: this.newCourseDescription
      };
      this.courses.push(course);
      // Clear input fields after adding a course
      this.courseName = '';
      this.newCourseAbbreviation = '';
      this.newCourseModules = '';
      this.newCourseCredits = '';
      this.newCourseDescription = '';
    }
  }

  toggleViews() {
    this.showAddDepartment = !this.showAddDepartment;
    this.showSelectDepartment = !this.showSelectDepartment;
  }

  closeModal() {
    this.modalController.dismiss();
  }
}

