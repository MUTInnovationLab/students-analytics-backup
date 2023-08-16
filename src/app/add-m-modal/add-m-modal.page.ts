import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-m-modal',
  templateUrl: './add-m-modal.page.html',
  styleUrls: ['./add-m-modal.page.scss'],
})
export class AddMModalPage {
  name:any;
  Surname:any;
  faculty:any;
  staffNumber:any;
  email:any;
  password:any;

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


  constructor(private modalController: ModalController, private router: Router) { }

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

  
  if (!this.name) {
    this.nameError = 'Please enter your name.';
    return;
  }

  if (!this.surname) {
    this.surnameError = 'Please enter your surname.';
    return;
  }


  if (!this.email) {
    this.emailError = 'Please enter your email.';
    return;
  }

  if (!this.password) {
    this.passwordError = 'Please enter a password.';
    return;
  }

  if (!this.confirmPassword) {
    this.confirmPasswordError = 'Please confirm your password.';
    return;
  }
  if (this.password !== this.confirmPassword) {
    this.confirmPasswordError = 'Passwords do not match.';
    return;
  }
  

  if (!this.emailRegex.test(this.email)) {
    this.emailError = 'Please enter a valid email address.';
    return;
  }
  
  if (!this.passwordRegex.test(this.password)) {
    this.confirmPasswordError = 'Password must contain at least 8 characters including uppercase, lowercase, and numbers.';
    return;
  }
  
  }
}