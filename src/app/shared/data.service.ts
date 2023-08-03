import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) { }

  registerUser(data: any){
    data.uid = this.firestore.createId();
    return this.firestore.collection('/registered').add(data);
  }

}
