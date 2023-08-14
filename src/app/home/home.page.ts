import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../my-modal/my-modal.page';
import { AddMModalPage } from '../add-m-modal/add-m-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}

  async openModal(...args: []) {
    const modal = await this.modalController.create({
      component: AddMModalPage,
      cssClass: 'my-custom-modal-class', // Optional CSS class for styling
    });

    await modal.present();
  }
  async openlectureModal() {
    const modal = await this.modalController.create({
      component: AddMModalPage,
      cssClass: 'my-custom-modal-class', // Optional CSS class for styling
    });

    await modal.present();
  }
}
