import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-dashboard',
  templateUrl: './app-dashboard.component.html',
  styleUrls: ['./app-dashboard.component.css']
})
export class AppDashboardComponent implements OnInit {
  statustitle = '';
  pending = 'pending';
  inprogress = 'inprogress';
  completed = 'completed';

  constructor() { }

  ngOnInit() {
  }

}
