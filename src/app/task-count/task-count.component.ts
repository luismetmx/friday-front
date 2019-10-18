import { Component, OnInit, Input } from '@angular/core';

import { FrapiService } from '../frapi.service';

@Component({
  selector: 'app-task-count',
  templateUrl: './task-count.component.html',
  styleUrls: ['./task-count.component.css']
})
export class TaskCountComponent implements OnInit {
  @Input()
  taskStatus;
  @Input() statusTitle;
  taskCount;

  constructor(private frapiService: FrapiService) { }

  ngOnInit() {
    this.frapiService.getExeTasksByStatus(this.taskStatus).subscribe((data) => {
      this.taskCount = JSON.parse(JSON.stringify(data)).length; //JSON Hack by Celso Ramirez
    });
  }

}
