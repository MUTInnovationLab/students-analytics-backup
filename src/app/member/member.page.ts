import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddMModalPage } from '../add-m-modal/add-m-modal.page';
import { MenuController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
  navCtrl: any;
  

  constructor(private router: Router, private modalController: ModalController,
    private menuCtrl: MenuController) { }
  
  goToModal(){
    this.navCtrl.navigateForward("/add-m-modal");
  }
  async openlectureModal() {
    const modal = await this.modalController.create({
      component: AddMModalPage,
    });

    await modal.present();
  }
  ngOnInit() {
  }
  tableData = [
    {
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      course: '2',
    },
    {
      name: 'Jane',
      surname: 'Smith',
      email: 'jane.smith@example.com',
      course: '7',
    },
    // Add more data items as needed
  ];

  openMenu() {
    // Open the menu by menu-id
    this.menuCtrl.enable(true, 'main-menu');
    this.menuCtrl.open('main-menu');
  }
}
