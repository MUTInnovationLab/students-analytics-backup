import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-view-marks',
  templateUrl: './view-marks.page.html',
  styleUrls: ['./view-marks.page.scss'],
})
export class ViewMarksPage implements OnInit {
  tableData: any[] = [];
  constructor(private menuCtrl: MenuController) { }

  ngOnInit() {
  }

  openMenu() {
    // Open the menu by menu-id
    this.menuCtrl.enable(true, 'lecturerMenu');
    this.menuCtrl.open('lecturerMenu');
  }
}
