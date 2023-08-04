import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/module/student.mode';
import { DataService } from 'src/app/shared/data.service';
@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.page.html',
  styleUrls: ['./add-student.page.scss'],
})
export class AddStudentPage implements OnInit {
 

    firstname: string='';
    lastname: string='';
    gender: string='';
    email: string='';
    studentNumber: string='';
    classYear: string='';
    coursesEnrolled: string='';
    bratch: string='';
    uid: string='';

    user: Student={
      firstname:'',
      lastname:'',
      gender:'',
      email:'',
      studentNumber:'',
      classYear:'',
      coursesEnrolled: '',
      bratch: '',
      uid: '',
    }
  constructor(private data: DataService) { }

  ngOnInit() {
  }
  
  saveStudent() {
    try{
    if (!this.firstname||!this.lastname|| !this.email||!this.gender||!this.bratch||!this.coursesEnrolled||!this.classYear||!this.studentNumber) {
  
      
      alert('Please fill in all fields.');
      return;
    }
    this.user.firstname=this.firstname;
    this.user.lastname=this.lastname;
    this.user.email=this.email;
    this.user.gender = this.gender;
    this.user.coursesEnrolled=this.coursesEnrolled;
    this.user.classYear=this.classYear;
    this.user.bratch = this.bratch;
    this.user.studentNumber = this.studentNumber;

  
   this.data.addStudent(this.user);
   alert("successfull added");

     }
    catch(error){
      alert("Error when addind a student");
      console.error("Oops"+error);
    } }

    back(){
      
    }
}

