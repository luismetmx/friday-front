import { Component, OnInit } from '@angular/core';

import { FrapiService } from '../frapi.service';

@Component({
  selector: 'app-app-pending-tasks-list',
  templateUrl: './app-pending-tasks-list.component.html',
  styleUrls: ['./app-pending-tasks-list.component.css']
})
export class AppPendingTasksListComponent implements OnInit {
  tasks;

  constructor(private frapiService: FrapiService) { }

  ngOnInit() {
    this.frapiService.getExeTasks().subscribe((data) => {
      console.log(data);
      this.tasks = data;
    });
  }

}
