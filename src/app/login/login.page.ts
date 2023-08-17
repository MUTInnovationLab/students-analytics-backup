import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../shared/data.service';


//import { Storage } from '@ionic/storage';
import { IonicModule, NavController ,LoadingController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Member } from '../module/member.mode';
import { UsersService } from '../shared/users.service';
import { map, switchMap } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email : string ='';
  wrong: boolean = false;
  password : string = '';
  user: Member = {uid: '',email: '',password: '',firstname: '',lastname: '',role:''};

 

  constructor(private load: LoadingController,private router: Router,private controller: NavController,private auth : AngularFireAuth,private registered : UsersService, private data : DataService, private afAuth: AngularFireAuth,private firestore: AngularFirestore) { }

  ngOnInit() {
  }

  
  
  async log() {
    try {
      const userCredential = await this.afAuth.signInWithEmailAndPassword(this.email,this.password);      
      const userEmail = userCredential.user!.email;

      // Check if the email exists in the "Admin" collection
      const adminExists$ = this.firestore.collection('Admin').doc(this.email).get().pipe(
        map((snapshot: { exists: any; }) => snapshot.exists)
      );

      // Check if the email exists in the "Registered-members" collection
      const memberExists$ = this.firestore.collection('Registered-members').doc(this.email).get().pipe(
        map((snapshot: { exists: any; }) => snapshot.exists)
      );

      // Subscribe to the observables and perform routing based on results
      adminExists$.subscribe(adminExists => {
        if (adminExists) {
          this.router.navigate(['/admin-dashboard']);
        } else {
          memberExists$.subscribe(memberExists => {
            if (memberExists) {
              this.router.navigate(['/member']);
            } else {
              console.log('User not found');
            }
          });
        }
      });
    } catch (error) {
      console.error('Login error:', error);
    }
  }
 
  switch(){
    this.router.navigateByUrl("/register");
  }


  /*async login(){


    if (this.email =='') 
    {
      alert("Enter email Address")
      return;
    }
    if (this.password =='') 
    {
      alert("Enter password")
      return;
    }
   let loader = this.load.create({message:"Please Wait..."});
   (await loader).present();

    this.auth.signInWithEmailAndPassword(this.email,this.password)
    .then(async userCredential => {
        if(userCredential.user?.email == this.email){
          this.wrong = true;
          
          this.router.navigateByUrl("/profile");
         
        };
        (await loader).dismiss();
        

    })
    .catch(async (error:any) =>{

        const errorM = error.message;
        const errorCode = error.code;
        (await loader).dismiss();

        if(errorM=='Firebase: Error (auth/user-not-found).')
        {
          alert("user is not registered danger");

        }
        if(errorM=='Firebase: Error (auth/wrong-password).')
        {
          alert("Incorrect Password danger");
        }
             
        })
  }*/
}
