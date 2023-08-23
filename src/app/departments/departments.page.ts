import { Component, OnInit } from '@angular/core';
import { department} from 'src/app/module/Department.mode';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { AddDepartmentOrCoursePage } from '../add-department-or-course/add-department-or-course.page';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.page.html',
  styleUrls: ['./departments.page.scss'],
})
export class DepartmentsPage implements OnInit {

  departments: department[] = [];


  color: String='brown';

  constructor(private navCtrl: NavController,

    private modalController: ModalController,
    private menuCtrl: MenuController,
    private data: DataService) { this.loadDepartments();
    }
    ngOnInit() {
     
    }
  
    loadDepartments() {
      this.data.getAllDept().subscribe((departments: department[]) => {
        this.departments = departments;
      });
    }
  
  

 

viewCourses(value: string){
  
  this.navCtrl.navigateForward('/courses', {
    queryParams: { course: value},
  });
  
}

getRandomColor(type: 'dark' | 'light'): string {
  try {
    const randomColorChannel = () => Math.floor(Math.random() * 256);
    let color;

    if (type === 'dark') {
      do {
        color = `rgb(${randomColorChannel()}, ${randomColorChannel()}, ${randomColorChannel()})`;
      } while (this.calculateLuminance(color) > 0.6);
    } else if (type === 'light') {
      do {
        color = `rgb(${randomColorChannel()}, ${randomColorChannel()}, ${randomColorChannel()})`;
      } while (this.calculateLuminance(color) < 0.6);
    } else {
      // Default to black if type is neither 'dark' nor 'light'
      color = 'rgb(0, 0, 0)';
    }

    return color;
  } catch (error) {
    console.error('An error occurred:', error);
    return 'rgb(0, 0, 0)';
  }
}

calculateLuminance(color: string): number {
  const rgb = color.match(/\d+/g);
  if (rgb) {
    const luminance = (0.299 * +rgb[0] + 0.587 * +rgb[1] + 0.114 * +rgb[2]) / 255;
    return luminance;
  }
  return 0;
}

  



async presentAddDepartmentModal() {
  const modal = await this.modalController.create({
    component:AddDepartmentOrCoursePage, // Use your CourseModalComponent here
  });
  return await modal.present();
}

openMenu() {
  // Open the menu by menu-id
  this.menuCtrl.enable(true, 'main-menu');
  this.menuCtrl.open('main-menu');
}
}



