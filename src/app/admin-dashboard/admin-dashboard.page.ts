import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.page.html',
  styleUrls: ['./admin-dashboard.page.scss'],
})
export class AdminDashboardPage implements OnInit {

  constructor( private menuCtrl: MenuController) { }

  ngOnInit() {
  }
  openMenu() {
    // Open the menu by menu-id
    this.menuCtrl.enable(true, 'main-menu');
    this.menuCtrl.open('main-menu');
  }

}
