import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Student } from 'src/app/module/student.mode';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { department } from 'src/app/module/Department.mode';
import { Subjects } from 'src/app/module/modules.mode';
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
    return this.firestore.collection('students').add(data);
  }

  addStudentMark(data: any){
    return this.firestore.collection('students').doc(data.student_number).set(data);
  }



  getAllStudents(): Observable<Student[]> {
    return this.firestore.collection<Student>('students').valueChanges();
  }

  getAllMembers() {
    return this.firestore.collection('registered').valueChanges();
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

  getModules(){
    return this.firestore.collection('Modules').valueChanges();;
  }
  getUserOneUser(email:any){
    return   this.firestore.collection('registered').doc(email) 
  }

  async getCurrentUserEmail(): Promise<string | null> {
    const user = await this.auth.currentUser;
    return user ? user.email : null;
  }
  getSpecificModuleByStuffNumber(staffNumber: string): Observable<Subjects[]> {
    return this.firestore
      .collection<Subjects>('Modules', (ref) => ref.where('staffNumber', '==', staffNumber))
      .valueChanges();
  }

  getModuleByStaffNumber(staffNumber: any) {
    return this.firestore.collection('Modules', ref =>
      ref.where('staffNumber', '==', staffNumber)
    ).valueChanges();
  }

  


}

