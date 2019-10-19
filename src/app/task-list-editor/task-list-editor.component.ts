import { Component, OnInit, Input } from '@angular/core';

import { FrapiService } from '../frapi.service';

@Component({
  selector: 'app-task-list-editor',
  templateUrl: './task-list-editor.component.html',
  styleUrls: ['./task-list-editor.component.css']
})
export class TaskListEditorComponent implements OnInit {
  tasks;
  @Input()
  editorType;
  @Input()
  projectID;

  constructor(private frapiService: FrapiService) { }

  ngOnInit() {}

}
