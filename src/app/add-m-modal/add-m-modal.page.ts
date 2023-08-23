import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController , NavParams} from '@ionic/angular';
import { register } from '../module/member.mode';
import {RegisterService} from '../shared/register.service';
import * as emailjs from 'emailjs-com';


@Component({
  selector: 'app-add-m-modal',
  templateUrl: './add-m-modal.page.html',
  styleUrls: ['./add-m-modal.page.scss'],
})
export class AddMModalPage {

  nameError:any;
  SurnameError:any;
  facultyError:any;
  staffNumberError:any;
  emailError:any;
  passwordError:any;
  emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // regular expression for email validation
  passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/; // regular expression for password validation
  confirmPassword:any;
  confirmPasswordError:any;
  surnameError:any;
  surname: any;
   passedData:any;
   message:any;

  member: register = {
    name: '',
    surname: '',
    password: '',
    email: '',
    role: '',
    uid: '',
    faculty: '', // New field
    staffNumber: '' // New field
  };


  constructor( private navParams: NavParams,private modalController: ModalController, private router: Router,private registrationService: RegisterService) {
    this.passedData = this.navParams.get('data');

    // Pre-fill the member object with the data
    if (this.passedData) {
      this.member = { ...this.passedData };
    }

   }

  closeModal() {
    this.modalController.dismiss();
  }

  
  create(){
  this.nameError=null;
  this.SurnameError=null;
  this.facultyError=null;
  this.staffNumberError=null;
  this.emailError=null;
  this.passwordError=null;

  
  if (!this.member.name) {
    this.nameError = 'Please enter your name.';
  alert(this.nameError);
    return;
  }

  if (!this.member.surname) {
    this.surnameError = 'Please enter your surname.';
    alert( this.surnameError)
    return;
  }


  if (!this.member.email) {
    this.emailError = 'Please enter your email.';
    alert(this.emailError)
    return;
  }

  if (!this.member.staffNumber) {
    this.passwordError = 'Please enter a stuffNumber.';
    alert( this.passwordError)
    return;
  }

  // if (!this.confirmPassword) {
  //   this.confirmPasswordError = 'Please confirm your password.';
  //   return;
  // }
  // if (this.password !== this.confirmPassword) {
  //   this.confirmPasswordError = 'Passwords do not match.';
  //   return;
  // }
  

  // if (!this.emailRegex.test(this.email)) {
  //   this.emailError = 'Please enter a valid email address.';
  //   return;
  // }
  
  // if (!this.passwordRegex.test(this.password)) {
  //   this.confirmPasswordError = 'Password must contain at least 8 characters including uppercase, lowercase, and numbers.';
  //   return;
  // }
  this.member.password=this.member.staffNumber
  this.SignUp() ;
  }

  SignUp() {



if(this.passedData){
  this.sendEmail(this.member.email, this.member.password);
  this.registrationService.updateRegisteredUser(this.member).then(() => {
   
   
    alert("new member added");
  this.member.name = '';
  this.member.surname = '';
  this.member.password = '';
  this.member.email = '';
  this.member.role = '';
  this.member.uid = '';
  this.member.faculty = '';
  this.member.staffNumber = '';

    
  })
  .catch(error => {
    alert("Registration error")
 //   console.error('Registration error:', error);
  });

}else{
  this.sendEmail(this.member.email, this.member.password);
  this.registrationService.register(this.member)
  
.then(() => {
 
    alert("member added updated");
  this.member.name = '';
  this.member.surname = '';
  this.member.password = '';
  this.member.email = '';
  this.member.role = '';
  this.member.uid = '';
  this.member.faculty = '';
  this.member.staffNumber = '';
    
  })
  .catch(error => {
    alert("Registration error")
 //   console.error('Registration error:', error);
  });
}
}

 


async sendEmail(toEmail: string, password:any) {
  const emailParams = {
    to_email: toEmail,
    from_email: 'mutinnovationlab@gmail.com',
    subject: 'Test Email',
    message: ``,
    password:password,
  };

 await emailjs.send('service_ckbbt49', 'template_zss9zn5', emailParams, 'W1qXgeQEdf-hF-IAg')
    .then(response => {
      console.log('Email sent successfully:', response.text);
      alert("Email sent successfully");
    })
    .catch(error => {
      console.error('Error sending email:', error);
    });
}








}