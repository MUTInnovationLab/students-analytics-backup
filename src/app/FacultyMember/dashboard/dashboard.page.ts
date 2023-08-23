import { Component, OnInit } from '@angular/core';

  import { MenuController, NavController } from '@ionic/angular';
  import { Router } from '@angular/router';
  

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  facultyName: string = 'John Doe';
  //facultyName: string = 'John Doe';
  email: string = 'john.doe@example.com';
  department: string = "Information Communication Technology"
    constructor(
      private navCtrl: NavController,
      private router: Router,
      private menuCtrl: MenuController
    ) {}
  ngOnInit(){

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
      // Navigate to the Student Profile page
      this.router.navigate(['/modules']);
    }
    
  openMenu() {
    // Open the menu by menu-id
    this.menuCtrl.enable(true, 'lecturerMenu');
    this.menuCtrl.open('lecturerMenu');
  }
  }
  

