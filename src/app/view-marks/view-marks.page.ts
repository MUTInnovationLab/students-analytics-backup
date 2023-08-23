import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-marks',
  templateUrl: './view-marks.page.html',
  styleUrls: ['./view-marks.page.scss'],
})
export class ViewMarksPage implements OnInit {
  tableData: any[] = [];
  constructor() { }

  ngOnInit() {
  }

}
