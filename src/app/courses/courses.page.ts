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
  department: string='';

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
    alert(this.department);
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
        this.courses = courses;
      });
  }

}

