import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import {DataService} from '../shared/data.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {
  userEmail: any;
  name:any;
  staffNo: any;
  constructor(private data:DataService, private menuCtrl: MenuController,private firestore:AngularFirestore) { }

  ngOnInit() {
    this.getUserDoc();
  }
  openMenu() {
    // Open the menu by menu-id
    
    this.menuCtrl.enable(true, 'main-menu');
    this.menuCtrl.open('main-menu');
  }




  async getUserDoc() {


    this.userEmail=  await this.data.getCurrentUserEmail();

    try {
      const userDoc = await this.firestore.collection('registered').doc(this.userEmail).get().toPromise();
       this.name=userDoc?.get('name') || null;
       this.staffNo=userDoc?.get('staffNumber') || null;
    } catch (error) {
      console.error('Error getting user role:', error);

    }



}


}
