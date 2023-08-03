import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { User } from 'firebase/auth';
import firebase from 'firebase/compat/app';


@Injectable({
  providedIn: 'root',
})
export class UsersService {
  user :any;
  constructor(
    private afs: AngularFirestore, 
    private afAuth: AngularFireAuth) {}

    getCurrentUser(): Promise<firebase.User | null> {
      return new Promise<firebase.User | null>((resolve, reject) => {
        const user = this.afAuth.currentUser;
        if (user) {

          this.user=user;
          resolve(user);

        } else {
          reject(null);
        }
      });
    }
  


  register(email: string, password: string){
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  isPasswordValid(password: string): boolean {
    // Define the criteria for a valid password
    const minLength = 8; // Minimum password length
    const hasUppercase = /[A-Z]/.test(password); // At least one uppercase letter
    const hasLowercase = /[a-z]/.test(password); // At least one lowercase letter
    const hasNumber = /[0-9]/.test(password); // At least one number
    const hasSpecialChar = /[!@#$%^&*()\-_=+{}[\]|;:'",.<>/?]/.test(password); // At least one special character
  
  
    if(password.length < minLength)
    {
    alert("Password should have minimum length of 8 characters");
      return false;
    }
    if(!hasUppercase)
    {
    alert("Password should have At least one uppercase letter");
      return false;
      
    }
    if(!hasLowercase)
    {
    alert("Password should have At least one lowercase letter");
      return false;
    }
    if(!hasNumber)
    {
    alert("Password should have At least one number");
      return false;
    }
    if(!hasSpecialChar)
    {
    alert("Password should have At least one special character");
      return false;
    }
    
    return true;
  }

  validateEmail(email: string): boolean {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const gmail = /^[^\s@]+@gmail\.com$/i;
  
    if (!email.includes("@") || !emailPattern.test(email) || !gmail.test(email)) {
      alert("Invalid email.");
      return false;
    }
  
    return true; // Email is valid
  }
  
  // Get current user's UID

  
}

