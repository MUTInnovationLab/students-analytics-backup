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
  lecturers: string[] = ['Dr RF Chidzonga', 'Mr N Ndlela', 'Prof B Bakare'];
  selectedLecturer: string = '';
  selectedYear: string ='';
  Years: string[] =['ECP','First Year','Second Year', 'Third Year', 'Forth Year','Advance'];
  subjects: Subjects[] = [
    // {
    //   name: 'Introduction to Computer Science',
    //   subjectCode: 'CS101',
    //   description: 'An introductory course covering fundamental concepts of computer science.',
    //   lecturer: 'Dr. Smith',
    //   year: 'First Year',
    // },
    // {
    //   name: 'Web Development',
    //   subjectCode: 'WEB202',
    //   description: 'Learn about creating interactive and dynamic websites.',
    //   lecturer: 'Prof. Johnson',
    //   year: 'Second Year',
    // },
    // {
    //   name: 'Database Management',
    //   subjectCode: 'DBM301',
    //   description: 'Explore techniques for designing and managing databases.',
    //   lecturer: 'Dr. Martinez',
    //   year: 'Third Year',
    // },
    // {
    //   name: 'Artificial Intelligence',
    //   subjectCode: 'AI401',
    //   description: 'Study advanced topics in artificial intelligence and machine learning.',
    //   lecturer: 'Dr. Williams',
    //   year: 'Fourth Year',
    // },
    // {
    //   name: 'Mobile App Development',
    //   subjectCode: 'MOB501',
    //   description: 'Develop mobile apps for various platforms.',
    //   lecturer: 'Prof. Brown',
    //   year: 'Fifth Year',
    // },
  ];

  subject: Subjects={

  name:'',
  subjectCode:'',
  description:'',
  lecturer:'',
  course:'',
  year:'',

  }
  course: string='';
  showCard: boolean =false;
  constructor(private modalController: ModalController,
    private data:DataService,
    private navParams: NavParams,
    private firestore: AngularFirestore 
    ) { }

  ngOnInit() {
    this.course = this.navParams.get('initialValue');
    alert(this.course);
     this.subject.course=this.course;
    this.getCoursesWithSpecificCategory();
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
