import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {DataService} from '../shared/data.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';
import * as emailjs from 'emailjs-com';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  userEmail: any;
  name: any;
  numberOfMembers: any;
  staffNo: any;
  surname: any;
  numberOfStudents: any;
  membersSubscription: Subscription | undefined;
  studentsSubscription: Subscription | undefined;
  numberOfDepartments: any;
  NumberOfcourse:any;

  constructor(private data: DataService, private menuCtrl: MenuController,
     private firestore: AngularFirestore) {
    this.getInitialData();
  }
 async ngOnInit(){
 
 }

 openMenu() {
  this.menuCtrl.enable(true, 'main-menu');
  this.menuCtrl.open('main-menu');
}


async getInitialData() {
  await Promise.all([this.getUserDoc(), this.getNumberOfMembers(),this.getNumberOfcourse(), this.getNumberOfStudents(),this.getNumberOfDepartments()]);
}

  async getUserDoc() {
    this.userEmail = await this.data.getCurrentUserEmail();
    if(this.userEmail){
    try {
      const userDoc = await this.firestore.collection('registered').doc(this.userEmail).get().toPromise();
      this.name = userDoc?.get('name') || null;
      this.surname = userDoc?.get('surname') || null;
    } catch (error) {
      console.error('Error getting user role:', error);
    }
  }
  }

  async getNumberOfMembers() {
    try {
      const querySnapshot = await  this.data.getAllMembers();
      this.membersSubscription = querySnapshot.subscribe((number: any[]) => {
        this.numberOfMembers = number.length;
        console.log('Number of Member documents:', this.numberOfMembers);
      });
    } catch (error) {
      console.error('Error getting user documents:', error);
    }
  
  }

  async getNumberOfStudents() {
    try {
      const querySnapshot =  this.data.getAllStudents();
      this.studentsSubscription = querySnapshot.subscribe((number: any[]) => {
        this.numberOfStudents = number.length;
        console.log('Number of student documents:', number.length);
      });
    } catch (error) {
      console.error('Error getting user documents:', error);
    }
  }

  async getNumberOfDepartments() {
    try {
      const querySnapshot =  this.data.getNumberOfDepartments();
      this.studentsSubscription = querySnapshot.subscribe((number: any[]) => {
        this.numberOfDepartments = number.length;
        console.log('Number of student documents:', number.length);
      });
    } catch (error) {
      console.error('Error getting user documents:', error);
    }
  }

  async getNumberOfcourse() {
    try {
      const querySnapshot =  this.data.getNumberOfcourse();
      this.studentsSubscription = querySnapshot.subscribe((number: any[]) => {
        this.NumberOfcourse = number.length;
        console.log('Number of student documents:', number.length);
      });
    } catch (error) {
      console.error('Error getting user documents:', error);
    }
  }

  ngOnDestroy() {
    if (this.membersSubscription) {
      this.membersSubscription.unsubscribe();
    }
    if (this.studentsSubscription) {
      this.studentsSubscription.unsubscribe();
    }
  }
}
