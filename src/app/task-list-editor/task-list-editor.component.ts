import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

import { FrapiService } from '../frapi.service';
import { ProjectEntity, TaskEntity } from '../projectEntity';

@Component({
  selector: 'app-task-list-editor',
  templateUrl: './task-list-editor.component.html',
  styleUrls: ['./task-list-editor.component.css']
})
export class TaskListEditorComponent implements OnInit, OnChanges {
  tasks;
  @Input()
  editorType;
  @Input()
  project: ProjectEntity;

  constructor(private frapiService: FrapiService) { }

  ngOnInit() {}

  loadTasks() {
    if (this.tasks === undefined) {
      this.frapiService.getProjectTemplate(this.project.type, this.project.phase, this.project.solution).subscribe((data) => {
        console.log(JSON.stringify(data));
        const ar: Array<any> = JSON.parse(JSON.stringify(data));
        this.project.template = {};
        ar.forEach(task => {
          this.project.template[task.id] = task;
        });
      });
    }
  }

  ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        if (propName === 'project' && this.project !== undefined) {
          this.loadTasks();
        }
      }
    }
  }

}
