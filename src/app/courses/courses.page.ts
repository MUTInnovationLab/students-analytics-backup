import { Component, OnInit } from '@angular/core';
import { Course} from 'src/app/module/course.mode';
import { ModalController } from '@ionic/angular';
import { ModulesPage } from '../modules/modules.page'; // Adjust the path



@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  courses: Course[] = [
    {
      name: 'Software Development',
      abbreviation: 'SD',
      numberOfModules: 20,
      credits: 400,
      description: 'Learn the principles of software development and programming languages.',
    },
    {
      name: 'Communication Networks',
      abbreviation: 'CNET',
      numberOfModules: 16,
      credits: 350,
      description: 'Explore the world of communication networks and protocols.',
    },
    {
      name: 'Computer Science',
      abbreviation: 'CS',
      numberOfModules: 15,
      credits: 340,
      description: 'Dive into the fundamentals of computer science and algorithms.',
    }
  ];
  
  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  getRandomColor(type: 'dark' | 'light') {
    // ... your random color generation logic here
  }

  viewCourses(courseInfo: number) {
    // ... your code to handle viewing courses here
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModulesPage,
      cssClass: 'my-custom-modal-class' // Optional custom CSS class
    });
    return await modal.present();
  }






}
