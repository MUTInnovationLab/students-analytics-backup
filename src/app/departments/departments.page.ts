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
  constructor(private navCtrl: NavController,private modalController: ModalController,
    private menuCtrl: MenuController,
    private data: DataService) { }
    ngOnInit() {
      this.loadDepartments();
    }
  
    loadDepartments() {
      this.data.getAllDept().subscribe((departments: department[]) => {
        this.departments = departments;
      });
    }
  
  

 

viewCourses(value: string){
  alert('Viewed'+value);
  this.navCtrl.navigateForward('/courses', {
    queryParams: { course: value},
  });
  
}

getRandomColor(type: 'dark' | 'light') {
  const randomColorChannel = () => Math.floor(Math.random() * 256);
  
  if (type === 'dark') {
    let color = `rgb(${randomColorChannel()}, ${randomColorChannel()}, ${randomColorChannel()})`;
    while (this.calculateLuminance(color) > 0.6) {
      color = `rgb(${randomColorChannel()}, ${randomColorChannel()}, ${randomColorChannel()})`;
    }
    return color;
  } else if (type === 'light') {
    let color = `rgb(${randomColorChannel()}, ${randomColorChannel()}, ${randomColorChannel()})`;
    while (this.calculateLuminance(color) < 0.6) {
      color = `rgb(${randomColorChannel()}, ${randomColorChannel()}, ${randomColorChannel()})`;
    }
    return color;
  }

  return 'rgb(0, 0, 0)'; // Default to black if type is neither 'dark' nor 'light'
}

calculateLuminance(color: string) {
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



