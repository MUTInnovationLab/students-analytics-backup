import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../shared/login.service';

//import { Storage } from '@ionic/storage';
import { IonicModule, NavController ,LoadingController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { UsersService } from '../shared/users.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email : string ='vgwala149@gmail.com';
  wrong: boolean = false;
  password : string = '123456';
  
 

  constructor(private LoginService: LoginService,private load: LoadingController,private router: Router,private controller: NavController,
    private auth : AngularFireAuth,private firestore: AngularFirestore,private registered : UsersService) { }

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

 
    this.LoginService.login(this.email, this.password);
}


}