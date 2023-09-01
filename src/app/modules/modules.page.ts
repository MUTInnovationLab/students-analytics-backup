import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Subjects} from 'src/app/module/modules.mode';
import {DataService} from '../shared/data.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.page.html',
  styleUrls: ['./modules.page.scss'],
})
export class ModulesPage implements OnInit {
  lecturers: any[] = [];
  selectedLecturer: string = '';
  selectedYear: string ='';
  Years: string[] =['ECP','First Year','Second Year', 'Third Year', 'Forth Year','Advance'];
  subjects: Subjects[] = [];

  subject: Subjects={

  name:'',
  subjectCode:'',
  description:'',
  lecturer:'',
  course:'',
  staffNumber:'',
  year:'',

  }
  course: string='';
  showCard: boolean =false;
  membersSubscription: any;
  members: any;
  constructor(private modalController: ModalController,
    private data:DataService,
    private navParams: NavParams,
    private firestore: AngularFirestore 
    ) { }

  ngOnInit() {
    this.course = this.navParams.get('initialValue');
    // alert(this.course);
     this.subject.course=this.course;
    this.getCoursesWithSpecificCategory();
    this.getAllMembers();
  }


  async getAllMembers() {
    try {
      const querySnapshot = await  this.data.getAllMembers();
      this.membersSubscription = querySnapshot.subscribe((member: any[]) => {
        this.lecturers = member;
        
      });
    } catch (error) {
      console.error('Error getting user documents:', error);
    }
  }


  addSubject(){

    if(this.subject.name!==''&&this.subject.lecturer!==''&&this.subject.description!==''&&this.subject.year!==''&&this.subject.subjectCode!=='')
   {
      this.data.addModule(this.subject);
      alert('successfully');
   }
   else
   {
    alert('All fields are required');
   }

  
  }


  closeModal() {
    this.modalController.dismiss();
  }
toggleCard(){

  if(this.showCard===false){
    this.showCard = true;
  }
  else if(this.showCard){
    this.showCard=false;
  }

}
getCoursesWithSpecificCategory() {
  this.firestore.collection('Modules', ref => ref.where('course', '==', this.course))
    .valueChanges()
    .subscribe((modules: any[]) => {
      this.subjects = modules;
    });
}

}
