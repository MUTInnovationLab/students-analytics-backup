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

  constructor(private data: DataService, private menuCtrl: MenuController, private firestore: AngularFirestore) {
    this.getInitialData();
  }
 async ngOnInit(){
 
 }

async getInitialData() {
  await Promise.all([this.getUserDoc(), this.getNumberOfMembers(), this.getNumberOfStudents()]);
}

  async getUserDoc() {
    this.userEmail = await this.data.getCurrentUserEmail();
    try {
      const userDoc = await this.firestore.collection('registered').doc(this.userEmail).get().toPromise();
      this.name = userDoc?.get('name') || null;
      this.surname = userDoc?.get('surname') || null;
    } catch (error) {
      console.error('Error getting user role:', error);
    }
  }

  async getNumberOfMembers() {
    try {
      const querySnapshot = await this.firestore.collection('registered').valueChanges();
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
      const querySnapshot = this.firestore.collection('students').valueChanges();
      this.studentsSubscription = querySnapshot.subscribe((number: any[]) => {
        this.numberOfStudents = number.length;
        console.log('Number of student documents:', number.length);
      });
    } catch (error) {
      console.error('Error getting user documents:', error);
    }
  }
  openMenu() {
    // Open the menu by menu-id
    
    this.menuCtrl.enable(true, 'main-menu');
    this.menuCtrl.open('main-menu');
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
