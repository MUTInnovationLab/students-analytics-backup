import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})
export class MyModalPage {

  constructor(private modalController: ModalController) { }

  dismissModal() {
    this.modalController.dismiss();
  }
}
