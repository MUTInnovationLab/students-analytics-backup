import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import {DataService} from '../shared/data.service';
import {UsersService} from '../shared/users.service';
import { department} from '../module/Department.mode'

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
  Inception: string='';
  department_Name: string='';
  department_Abbreviation: string='';
  department_Description: string='';
  initialValue!:boolean;
  InceptionDate: Date = new Date();

  dept: department={
    department_Name:'',
    department_Abbreviation:'',
    department_Description:'',
    numberOfCourses: 0,
    InceptionDate:'',
}

value: string = ''; // Replace with the actual property you have
conditionValue = 'course'; // The value to check against


 
  hideCard = true;
  toggleDisabled = false; 
  hide!:boolean;

  constructor(private modalController: ModalController,
    private data: DataService,
    private navParams: NavParams,
) {}
  ngOnInit() {
    this.value = this.navParams.get('initialValue'); // Get the passed value from Page 1
    if(this.value  !== undefined){
      alert(this.value);
      this.showAddDepartment = true;
    }
  }

  newCourse: any;
  courses: any[] = [];

  addCourse() {
 
    if ( this.courseName && this.newCourseAbbreviation && this.newCourseModules && this.newCourseCredits && this.newCourseDescription) {
      if(this.value  !== undefined){
        this.department_Abbreviation =this.value;
       }
    
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
  
    this.dept.InceptionDate = this.InceptionDate.toLocaleString();
   
      if(this.dept.department_Name!=='',this.dept.department_Abbreviation!=='',this.dept.department_Description!==''){
      if(this.showAddDepartment){
        this.addCourse();
      }
      this.data.addDepartment(this.dept);
      alert('Successfully');
}
  else{
    alert('All fields are required');

  }
}
}

