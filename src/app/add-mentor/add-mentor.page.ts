import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MyModalPage } from '../my-modal/my-modal.page';

@Component({
  selector: 'app-add-mentor',
  templateUrl: './add-mentor.page.html',
  styleUrls: ['./add-mentor.page.scss'],
})
export class AddMentorPage {

  constructor(private modalController: ModalController) {}

  async openModal() {
    const modal = await this.modalController.create({
      component: MyModalPage,
    });

    await modal.present();
  }
}
