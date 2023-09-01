import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AddMModalPage } from '../add-m-modal/add-m-modal.page';
import { IonSelect, MenuController, ModalController } from '@ionic/angular';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
  searchQuery: string = '';
  tableData: any[] = [];
  @ViewChild('mySelect') mySelect: IonSelect | undefined;
  modules: any;

  

  constructor(
    private data: DataService,
    private menuCtrl: MenuController,
    private router: Router,
    private modalController: ModalController,

  ) {}


  openSelect(staffNumber: any) {
      this.data.getModuleByStaffNumber(staffNumber).subscribe(response => {
        this.modules = response;
        // Now you can access the fetched document, if available
        this.mySelect?.open();
      });
    }

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
      console.log(this.tableData);
    });
  }
  getallModuleOfUser() {
    this.data.getAllMembers().subscribe((data: any[]) => {
      this.modules = data;
      console.log(this.tableData);
    });
  }



//   modules:any;
// all(){
//   this.data.getAllMembers().subscribe((data: any[]) => {
//     this.tableData = data;
  
//     // Step 2: Fetch Modules
//     this.data.getModules().subscribe(modules => {
//       this.modules = modules;
  
//       // Step 3: Update UIDs in tableData based on StaffNumber
//       for (const module of this.modules) {
//         const staffNumber = module.staffNumber;
  
//         for (const item of this.tableData) {
//           if (item.uid === staffNumber) {
//             item.uid += ` - ${staffNumber}`;
//           }
//         }
//       }
//     });
//   });
// }




  getModules(){
    this.data.getModules().subscribe(modules =>{
  // this.modules=modules;
    })
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



 
  
  




