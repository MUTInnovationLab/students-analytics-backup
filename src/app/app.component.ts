import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { DataService } from './shared/data.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userEmail: any;
  surname:any;
  name:any;
  constructor(private data:DataService,private firestore:AngularFirestore) {}

  async getUserDoc() {


    this.userEmail=  await this.data.getCurrentUserEmail();

    try {
      const userDoc = await this.firestore.collection('registered').doc(this.userEmail).get().toPromise();
       this.name=userDoc?.get('name') || null;
       this.surname=userDoc?.get('surname') || null;
    } catch (error) {
      console.error('Error getting user role:', error);

    }



}
}
