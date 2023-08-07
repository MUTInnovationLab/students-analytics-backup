import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonDatetime } from '@ionic/angular';

@Component({
  selector: 'app-fm-profile',
  templateUrl: './fm-profile.page.html',
  styleUrls: ['./fm-profile.page.scss'],
})
export class FMProfilePage implements OnInit {
  email='';
  fname='';
  lname='';
  gender='';
  birthday='';
  department='';
  jobtitle='';

  constructor() { }

  ngOnInit() {
  }

}
