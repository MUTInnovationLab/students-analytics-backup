// profile.page.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from '../module/member.mode';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UsersService } from '../shared/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage{

  email:any;
  
  user: Member={
    firstname:'',
    lastname:'',
    password:'',
    email:'',
    role:'',
    uid: ''
}
memberCollection: AngularFirestoreCollection<Member>;

  constructor(private router: Router,
    private store: AngularFirestore,
    private service: UsersService) {
    
    this.memberCollection = this.store.collection<Member>('registered');
    this.get();
  }


  logout() {

    this.router.navigateByUrl('/login');
  }

  searchStudentByEmailAndPassword(email: string): Observable<Member[]> {
    return this.memberCollection.valueChanges().pipe(
      map(members => members.filter(member => member.email === email))
    );
  }




get() {
  this.service.getCurrentUser()
  .then((user) => {
    //this.currentuser=people;
    if(user !==null){
    this.email = user.email;
  

    this.searchStudentByEmailAndPassword(this.email).subscribe(
      (member: Member[]) => {
        if (member.length === 0) {
          alert('member not found!');
        } else {
          member.forEach(member => {
           alert(JSON.stringify(member));
             this.user = member;
            console.log(member);
          });
        }
      },
      (error: any) => {
        // Handle errors, if any
        console.error(error);
      }
    );
    
    }
    else{
      alert("user not found");
    }
  })
  .catch((error) => {
    // No user is authenticated or an error occurred
    console.log(error);
  });
}
}
