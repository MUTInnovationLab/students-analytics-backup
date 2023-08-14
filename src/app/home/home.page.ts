import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../my-modal/my-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: MyModalPage,
    });

    await modal.present();
  }
}
