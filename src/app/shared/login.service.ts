import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {



  constructor(
    private auth: AngularFireAuth,
    private firestore: AngularFirestore,
    private router: Router
  ) { }

  async login(email: string, password: string) {
    try {
      const userCredential = await this.auth.signInWithEmailAndPassword(email, password);

      if (userCredential.user?.email === email) {
        const userDoc = await this.firestore.collection('registered').doc(email).get().toPromise();
        const userRole = userDoc?.get('role');

        if (userRole === 'Admin') {
          this.router.navigateByUrl('/admin-dashboard');
        } else if (userRole === 'Member') {
          this.router.navigateByUrl('/dashboard');
        }
      }
    } catch (error:any) {
      const errorM = error.message;

      if (errorM === 'Firebase: Error (auth/user-not-found).') {
        alert('User is not registered.');
      } else if (errorM === 'Firebase: Error (auth/wrong-password).') {
        alert('Incorrect Password.');
      }
     alert(error.message)
      console.error('Login error:', error);
    }
  }
}
