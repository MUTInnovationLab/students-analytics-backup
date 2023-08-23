import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddMModalPage } from '../add-m-modal/add-m-modal.page';
import { MenuController, ModalController } from '@ionic/angular';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
  searchQuery: string = '';
  tableData: any[] = [];

  constructor(
    private data: DataService,
    private menuCtrl: MenuController,
    private router: Router,
    private modalController: ModalController,

  ) {}

  goToModal() {
    this.router.navigate(['/add-m-modal']);
  }

  async openlectureModal() {
    const modal = await this.modalController.create({
      component: AddMModalPage,
    });
    await modal.present();
  }

  ngOnInit() {
    this.fetchAllMembers();
  }

  fetchAllMembers() {
    this.data.getAllMembers().subscribe((data: any[]) => {
      this.tableData = data;
    });
  }

  async deleteUser(email: string) {
    try {
      await this.data.getUserOneUser(email).delete();
      console.log('Document successfully deleted!');
      alert('User successfully deleted!');
      this.tableData = this.tableData.filter(item => item.email !== email);
    } catch (error) {
      console.error('Error deleting document: ', error);
    }
  }

  async editUser(email: string) {
    const docRef = this.data.getUserOneUser(email);

    try {
      const docSnapshot = await docRef.get().toPromise();

      if (docSnapshot?.exists) {
        const data = docSnapshot.data();

        const modal = await this.modalController.create({
          component: AddMModalPage,
          componentProps: {
            data: data,
          },
        });

        await modal.present();
      } else {
        console.log('Document does not exist');
      }
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  }

  openMenu() {
    this.menuCtrl.enable(true, 'main-menu');
    this.menuCtrl.open('main-menu');
  }
}



 
  
  




