import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Student } from 'src/app/module/student.mode';
import { department } from 'src/app/module/Department.mode';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private firestore: AngularFirestore) { }

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
  getAllDept(): Observable<department[]> {
    return this.firestore.collection<department>('Departments').valueChanges();
  }
  
  addDepartment(data: any){
    return this.firestore.collection('Departments').doc(data.department_Abbreviation).set(data);
  }
  addCourse(data: any){
    return this.firestore.collection('Courses').doc(data.abbreviation).set(data);
  }
  addModule(data: any){
    return this.firestore.collection('Modules').doc(data.subjectCode).set(data);
  }



}

