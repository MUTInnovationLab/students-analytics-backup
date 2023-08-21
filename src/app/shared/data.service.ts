import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Student } from 'src/app/module/student.mode';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore,private auth:AngularFireAuth) { }

  registerUser(data: any){
    data.uid = this.firestore.createId();
    return this.firestore.collection('registered').doc(data.email).set(data);
  }
  addStudent(data: any){
    data.uid = this.firestore.createId();
    return this.firestore.collection('/students').add(data);
  }

  getAllStudents(): Observable<Student[]> {
    return this.firestore.collection<Student>('students').valueChanges();
  }

  async getCurrentUserEmail(): Promise<string | null> {
    const user = await this.auth.currentUser;
    return user ? user.email : null;
  }


  
}

