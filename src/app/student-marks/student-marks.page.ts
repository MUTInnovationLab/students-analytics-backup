import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-marks',
  templateUrl: './student-marks.page.html',
  styleUrls: ['./student-marks.page.scss'],
})
export class StudentMarksPage implements OnInit {
 tests:string[]=[];
  constructor() { }

  ngOnInit() {
    this.load();
  }
  load(){
    this.tests=["nduduzo","mweshe","ngwane","gatsheni","solace","gatsh","nduvane"]
      

    
  }

  searchCourse(ev: any) {
    this.load();
    let course = ev.target.value;
    if (course && course.trim() !== '') {
      this.tests = this.tests.filter((cours: any) => {
        return cours.toLowerCase().indexOf(course.toLowerCase()) > -1;
      });
    }
  }
  
}
