import { Component, OnInit } from '@angular/core';
import { department} from 'src/app/module/Department.mode';
import { MenuController, ModalController, NavController } from '@ionic/angular';
import { AddDepartmentOrCoursePage } from '../add-department-or-course/add-department-or-course.page';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.page.html',
  styleUrls: ['./departments.page.scss'],
})
export class DepartmentsPage implements OnInit {

  departments: department[] = [
    {
      name: 'Information Technology',
      numberOfCourses: 0,
      purpose: 'understanding technology',
      abbreviation: 'IT',
      InceptionDate:'1990-01-01',
      uid: ''
    },
    {
      name: 'Marketing',
      numberOfCourses: 5,
      purpose: 'promote and advertise products or services.',
      abbreviation: 'MKT',
      InceptionDate: '2005-05-15',
      uid: ''
    },
    {
      name: 'Human Resources',
      numberOfCourses: 2,
      purpose: 'manage employee recruitment, training, and relations.',
      abbreviation: 'HR',
      InceptionDate: '1998-07-20',
      uid: ''
    }
  ];

  color: String='brown';
  constructor(private navCtrl: NavController,private modalController: ModalController,
    private menuCtrl: MenuController) { }

  ngOnInit() {
   
  }
 

viewCourses(number: number){
  alert('Viewed'+number);
  this.navCtrl.navigateForward('/courses', {
    queryParams: { course: number },
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
