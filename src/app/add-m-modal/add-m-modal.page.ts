import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController , NavParams} from '@ionic/angular';
import { register } from '../module/member.mode';
import {RegisterService} from '../shared/register.service';
import * as emailjs from 'emailjs-com';
import { DataService } from '../shared/data.service';


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
   departments: any;
   member: register = {
       name: '',
       surname: '',
       password: '',
       email: '',
       role: '',
       uid: '',
       department: '', // New field
       staffNumber: '', // New field
     };

    
   
     constructor(
       private data: DataService,
       private navParams: NavParams,
       private modalController: ModalController,
       private router: Router,
       private registrationService: RegisterService
     ) {
       this.passedData = this.navParams.get('data');
       this.loadDepartments();
       if (this.passedData) {
         this.member = { ...this.passedData };
       }
     }
   
     closeModal() {
       this.modalController.dismiss();
     }
   
     create() {
       // Reset error messages
       this.nameError = null;
       this.surnameError = null;
       this.facultyError = null;
       this.staffNumberError = null;
       this.emailError = null;
       this.passwordError = null;
   
       // Validation checks
       if (!this.member.name) {
         this.nameError = 'Please enter your name.';
         alert(this.nameError);
         return;
       }
   
       // Repeat the validation checks for other fields...
   
       // If all validations pass, proceed to sign up
       this.member.password = this.member.staffNumber;
       this.SignUp();
     }
   
     SignUp() {
       this.sendEmail(this.member.email, this.member.password);
   
       const registrationPromise = this.passedData
         ? this.registrationService.updateRegisteredUser(this.member)
         : this.registrationService.register(this.member);
   
       registrationPromise
         .then(() => {
           alert(this.passedData ? 'Member updated' : 'Member added');
           this.resetMemberFields();
         })
         .catch(error => {
           alert('Registration error');
           console.error('Registration error:', error);
         });
     }
   
     resetMemberFields() {
       this.member = {
         name: '',
         surname: '',
         password: '',
         email: '',
         role: '',
         uid: '',
         department: '',
         staffNumber: '',
       };
     }
   
     async sendEmail(toEmail: string, password: any) {
       const emailParams = {
         to_email: toEmail,
         from_email: 'mutinnovationlab@gmail.com',
         subject: 'Test Email',
         message: '', // Add your email template message here
         password: password,
       };
   
       try {
         await emailjs.send(
           'service_ckbbt49',
           'template_zss9zn5',
           emailParams,
           'W1qXgeQEdf-hF-IAg'
         );
         console.log('Email sent successfully');
         alert('Email sent successfully');
       } catch (error) {
         console.error('Error sending email:', error);
         alert('Error sending email');
       }
     }
   
     loadDepartments() {
       this.data.getAllDept().subscribe((departments: any) => {
         this.departments = departments;
       });
     }
     
   }
   


