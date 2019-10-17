import { Component, OnInit } from '@angular/core';

import { FrapiService } from '../frapi.service';

@Component({
  selector: 'app-app-task-list',
  templateUrl: './app-task-list.component.html',
  styleUrls: ['./app-task-list.component.css']
})
export class AppTaskListComponent implements OnInit {
  tasks = [{name: 'Task 1', owner: 'Owner 1', date: '2019Oct-10', status: 'Green', team: 'Team 1'}];

  constructor(private frapiService: FrapiService) { }

  ngOnInit() {
    this.frapiService.getTasks().subscribe((data) => {
      console.log(data);
      this.tasks = data['tasks'];
    });
  }

}
