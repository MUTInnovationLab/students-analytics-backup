import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddMModalPage } from '../add-m-modal/add-m-modal.page';
import { MenuController, ModalController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {
  navCtrl: any;
  searchQuery: string = '';

  
  tableData: any[] = []; // Initialize with an empty array
  constructor(private menuCtrl: MenuController,private firestore: AngularFirestore,private router: Router, private modalController: ModalController) { }
  
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
    this.fetchAllMembers();
  }

  fetchAllMembers() {
    // Replace 'your-collection-name' with your actual Firestore collection name
    this.firestore
      .collection('registered')
      .valueChanges()
      .subscribe((data: any[]) => {
        this.tableData = data;
      });
  }



  deleteUser(email: string) {
    // Replace 'your-collection-name' with the actual Firestore collection name
    // Here, we are assuming 'your-collection-name' is the collection where documents are stored with a field 'email'
    this.firestore
      .collection('registered')
      .doc(email) // Use the email as the document ID
      .delete()
      .then(() => {
        console.log('Document successfully deleted!');
         alert('user successfully deleted!')
        this.tableData = this.tableData.filter(item => item.email !== email);
      })
      .catch(error => {
        console.error('Error deleting document: ', error);
      });
  }

  async editUser(email: string) {
    const docRef = this.firestore.collection('registered').doc(email);
  
    try {
      const docSnapshot = await docRef.get().toPromise();
  
      if (docSnapshot?.exists) {
        const data = docSnapshot.data();
  
        const modal = await this.modalController.create({
          component: AddMModalPage,
          componentProps: {
            data: data
          }
        });
  
        modal.onDidDismiss().then((dataReturned) => {
          if (dataReturned.data) {
            // Handle returned data if needed
          }
        });
  
        return await modal.present();
      } else {
        console.log('Document does not exist');
      }
    } catch (error) {
      console.error('Error fetching document:', error);
    }
  }




 
  openMenu() {
    // Open the menu by menu-id
    
    this.menuCtrl.enable(true, 'main-menu');
    this.menuCtrl.open('main-menu');
  }
  // tableData = [
  //   {
  //     name: 'John',
  //     surname: 'Doe',
  //     email: 'john.doe@example.com',
  //     course: '2',
  //   },
  //   {
  //     name: 'Jane',
  //     surname: 'Smith',
  //     email: 'jane.smith@example.com',
  //     course: '7',
  //   },
  //   // Add more data items as needed
  // ];





}
