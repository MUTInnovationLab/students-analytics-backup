import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../module/member.mode';
import {DataService} from '../shared/data.service';
import {UsersService} from '../shared/users.service';


@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.page.html',
  styleUrls: ['./add-member.page.scss'],
})
export class AddMemberPage implements OnInit {

  firstname: string='';
  email: string ='';
  password: string ='';
  confirmPassword: string='';
  role:string='';
  lastname: string ='';
  uid: string='';

  user: Member={
    firstname:'',
    lastname:'',
    password:'',
    email:'',
    role:'',
    uid: ''
}


  constructor(private router: Router, 
    private data: DataService,
    private auth: UsersService) { }

  ngOnInit() {
  }
  switch(){
    this.router.navigateByUrl("/login");
  }
  signUp() {
    if (!this.firstname||!this.lastname|| !this.email || !this.role || !this.password || !this.confirmPassword) {
  
      
      alert('Please fill in all fields.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      
      alert('Passwords do not match.');
      return;
    }
    this.user.email=this.email;
    this.user.firstname=this.firstname;
    this.user.lastname=this.lastname;
    this.user.role=this.role;
    this.user.password = this.password;
    this.data.registerUser(this.user);
    this.register();
    alert('Successfully registered');
    
  }
  register() {
    this.auth.register(this.email, this.password)
      .then(response => {
        alert('Registration success');
      })
      .catch(error => {
        alert('Registration error');
      });
  }
}
