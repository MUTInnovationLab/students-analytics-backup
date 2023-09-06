import { Component, OnInit } from '@angular/core';
import { Course} from 'src/app/module/course.mode';
import { MenuController, ModalController } from '@ionic/angular';
import { ModulesPage } from '../modules/modules.page'; // Adjust the path
import { AddDepartmentOrCoursePage } from '../add-department-or-course/add-department-or-course.page';
import { NavController } from '@ionic/angular'; // Import NavController
import { ActivatedRoute } from '@angular/router'; // Import ActivatedRoute
import { AngularFirestore } from '@angular/fire/compat/firestore'; // Import AngularFire's Firestore module




@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  valueToSend: string='';
  courses: Course[] = [];
  streams: Course[] = [];
  department: string='';
 // Initialize as an empty array
  searchKeyword: string = '';
  filteredCourses: any[] = [];

  constructor(private modalController: ModalController,
    private menuCtrl: MenuController,
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private firestore: AngularFirestore ) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.department = params['course'];
    });
    this.getCoursesWithSpecificCategory();
    
  }
  

  viewCourses(courseInfo: number) {
    // ... your code to handle viewing courses here
  }

  async openModal(value: string) {
    const modal = await this.modalController.create({
      component: ModulesPage,
      cssClass: '.my-custom-modal',
      componentProps: {
        initialValue: value// Pass the value to the modal
      }
    });
    return await modal.present();
  }

  async presentAddDepartmentModal() {
// Set the value you want to send to the modal
    const modal = await this.modalController.create({
      component: AddDepartmentOrCoursePage,
      componentProps: {
        initialValue: this.department // Pass the value to the modal
      }
    });
    return await modal.present();
  }

  openMenu() {
    // Open the menu by menu-id
    this.menuCtrl.enable(true, 'main-menu');
    this.menuCtrl.open('main-menu');
  }
  getCoursesWithSpecificCategory() {
    this.firestore.collection('Courses', ref => ref.where('department', '==', this.department))
      .valueChanges()
      .subscribe((courses: any[]) => {
        this.courses  = courses;
        

      });
  }
  load(){
    this.courses = this.streams;
  }

  filterCourses() {
    this.filteredCourses = this.courses.filter(course =>
      course.name.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
  }

  applyFilter() {
    this.courses = [...this.filteredCourses];
  }
// Declare a property to store the original courses data
originalCourses: Course[] = [];

// Assuming this.courses is an array of Course objects
searchCourse(ev: any) {
  this.getCoursesWithSpecificCategory();
  let course = ev.target.value;
  
  // If the originalCourses array is empty, copy the data from this.courses
  if (this.originalCourses.length === 0) {
    this.originalCourses = [...this.courses];
  }
  
  if (course && course.trim() !== '') {
    this.courses = this.originalCourses.filter((cours: Course) => {
      return cours.name.toLowerCase().includes(course.toLowerCase());
    });
  } else {
    // If the input is empty, show all courses
    this.courses = [...this.originalCourses];
  }
}


  //   searchCourse(ev: any) {
  //     this.load();
  //     let course = ev.target.value;
      
  //     if (course && course.trim() !== '') {
  //       this.courses = this.courses.filter((cours: Course) => {
  //         return cours.name.toLowerCase().includes(course.toLowerCase());
  //       });
  //     }

  // }
}
