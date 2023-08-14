import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddMModalPage } from '../add-m-modal/add-m-modal.page';

@Component({
  selector: 'app-add-lecture',
  templateUrl: './add-lecture.page.html',
  styleUrls: ['./add-lecture.page.scss'],
})
export class AddlecturePage {

  constructor(private modalController: ModalController) {}

  async openlectureModal() {
    const modal = await this.modalController.create({
      component: AddMModalPage,
    });

    await modal.present();
  }
}
