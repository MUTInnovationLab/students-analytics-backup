import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddMModalPage } from '../add-m-modal/add-m-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
  navCtrl: any;
  

  constructor(private router: Router, private modalController: ModalController) { }
  
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
      course: 'Programming',
    },
    {
      name: 'Jane',
      surname: 'Smith',
      email: 'jane.smith@example.com',
      course: 'Design',
    },
    // Add more data items as needed
  ];
}
