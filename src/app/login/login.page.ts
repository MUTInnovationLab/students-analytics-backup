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

 

  constructor(private load: LoadingController,private router: Router,private controller: NavController,private auth : AngularFireAuth,private registered : UsersService, private data : DataService) { }

  ngOnInit() {
  }
 
  switch(){
    this.router.navigateByUrl("/register");
  }


  async login(){


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
  }
}
