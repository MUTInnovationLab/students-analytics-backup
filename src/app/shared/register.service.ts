import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore
  ) { }

  register(member: any) {
    return this.auth.createUserWithEmailAndPassword(member.email, member.staffNumber)
      .then(async authResult => {
        const user = this.auth.currentUser;
      if (await user) {
        return this.firestore.collection('registered').doc(member.email).set(member);
      }
      })
      .catch(error => {
        // Handle error here
        console.error('Registration error:', error.message);
        throw error;
      });
  }


  async updateRegisteredUser(member: any){
    const user = this.auth.currentUser;
    if (await user) {
      return this.firestore.collection('registered').doc(member.email).set(member);
    }
  }
}
