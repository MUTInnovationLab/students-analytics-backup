import { Component, OnInit } from '@angular/core';
import { Subjects } from 'src/app/module/modules.mode';
import { DataService } from '../shared/data.service';
import { ActivatedRoute } from '@angular/router';
// import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specific-modules',
  templateUrl: './specific-modules.page.html',
  styleUrls: ['./specific-modules.page.scss'],
})
export class SpecificModulesPage implements OnInit {
  module: Subjects = {
    name: '',
    subjectCode: '',
    description: '',
    lecturer: '',
    course: '',
    year: '',
  };

  modules: Subjects[] = [];

  constructor(private route: ActivatedRoute,private data: DataService) {}

  ngOnInit() {
    // Retrieve the parameter value
    this.route.queryParams.subscribe((params) => {
      const stuffNo = params['paramName']; // Replace 'paramName' with the actual parameter name
      if (stuffNo) {
        alert('Parameter Value:'+stuffNo);

        // const specificStuffNumber = '12345'; // Replace with the stuffNumber you want to search for
        this.data.getModuleByStuffNumber(stuffNo).subscribe((data) => {
          this.modules = data;
        });
        // Do something with the parameter value
      }
    });
    console.log(this.modules);
  }

 
}
