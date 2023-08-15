import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.page.html',
  styleUrls: ['./member.page.scss'],
})
export class MemberPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  tableData = [
    {
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      course: '2',
    },
    {
      name: 'Jane',
      surname: 'Smith',
      email: 'jane.smith@example.com',
      course: '7',
    },
    // Add more data items as needed
  ];
}
