import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Subjects} from 'src/app/module/modules.mode';
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
    {
      name: 'Introduction to Computer Science',
      subjectCode: 'CS101',
      description: 'An introductory course covering fundamental concepts of computer science.',
      lecturer: 'Dr. Smith',
      year: 'First Year',
    },
    {
      name: 'Web Development',
      subjectCode: 'WEB202',
      description: 'Learn about creating interactive and dynamic websites.',
      lecturer: 'Prof. Johnson',
      year: 'Second Year',
    },
    {
      name: 'Database Management',
      subjectCode: 'DBM301',
      description: 'Explore techniques for designing and managing databases.',
      lecturer: 'Dr. Martinez',
      year: 'Third Year',
    },
    {
      name: 'Artificial Intelligence',
      subjectCode: 'AI401',
      description: 'Study advanced topics in artificial intelligence and machine learning.',
      lecturer: 'Dr. Williams',
      year: 'Fourth Year',
    },
    {
      name: 'Mobile App Development',
      subjectCode: 'MOB501',
      description: 'Develop mobile apps for various platforms.',
      lecturer: 'Prof. Brown',
      year: 'Fifth Year',
    },
  ];
  name: string = '';
  subjectCode: string = '';
  description: string = '';
  //lecturer: string = '';
  year: number = 0; // Assuming 'year' is a number

  addSubject() {
    // Use this.name, this.subjectCode, this.description, this.lecturer, this.year for your logic
    // For example, push to an array, send to API, etc.
    console.log('New subject data:', this.name, this.subjectCode, this.description, this.lecturers, this.year);
    // After adding, reset the input fields
    this.name = '';
    this.subjectCode = '';
    this.description = '';
    //this.lecturer = '';
    //this.year = null;
  }
  showCard: boolean =false;
  constructor(private modalController: ModalController) { }

  ngOnInit() {
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
}
