import { Component, OnInit } from '@angular/core';
import { MenuController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data.service';
//import {DataService} from 'src/page/shared/data.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Subscription } from 'rxjs';
import * as emailjs from 'emailjs-com';
  

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  name: string = '';
  surname: string='';
  userEmail : any='';
  staffNumber: string='';
  facultyName: string = 'John Doe';
  email: string = 'john.doe@example.com';
  department: string = "Information Communication Technology"
    constructor(
      private navCtrl: NavController,
      private router: Router,
      private menuCtrl: MenuController,
      private data: DataService, 
      //private menuCtrl: MenuController,
      private firestore: AngularFirestore
    ) {}
  //   constructor( {
  //    this.getInitialData();
  //  }
  ngOnInit(){
    this.getUserDoc();
  }
  

  navigateToHelpSupport() {
    // Navigate to the Help/Support page
    this.router.navigate(['/help-support']);
  }

  navigateToLogout() {
    // Handle logout logic here
  }
  
    navigateToAddStudent() {
      // Navigate to the Add Student page
      this.router.navigate(['/add-student']);
    }
  
    navigateToUploadSpreadsheet() {
      // Navigate to the Upload Spreadsheet page
      this.router.navigate(['/upload-spreadsheet']);
    }
  
    navigateToAssignmentPage() {
      // Navigate to the Assignment page
      this.router.navigate(['/assignments']);
    }
  
    navigateToViewMarksPage() {
      // Navigate to the View Marks page
      this.router.navigate(['/view-marks']);
    }
  
    navigateToFacultyProfile() {
      // Navigate to the Faculty Profile page
      this.router.navigate(['/faculty-profile']);
    }
  
    navigateToStudentProfile() {
      // Navigate to the Student Profile page
      this.router.navigate(['/student-profile']);
    }
navigateToModulesPage() {
  // Navigate to the Specific Modules page with a parameter
  this.router.navigate(['/specific-modules'], { queryParams: { paramName: this.staffNumber } });
}

    
  openMenu() {
    // Open the menu by menu-id
    this.menuCtrl.enable(true, 'lecturerMenu');
    this.menuCtrl.open('lecturerMenu');
  }

  async getUserDoc() {
    this.userEmail = await this.data.getCurrentUserEmail();
    try {
      const userDoc = await this.firestore.collection('registered').doc(this.userEmail).get().toPromise();
      this.name = userDoc?.get('name') || null;
      this.surname = userDoc?.get('surname') || null;
      this.staffNumber = userDoc?.get('staffNumber') || null;
    } catch (error) {
      console.error('Error getting user role:', error);
    }
  }
  }
  

