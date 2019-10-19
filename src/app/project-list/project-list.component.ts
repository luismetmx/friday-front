import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FrapiService } from '../frapi.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
  projects;

  constructor(private frapiService: FrapiService, private router: Router) { }

  ngOnInit() {
    this.frapiService.getProjects().subscribe((data) => {
      console.log(data);
      this.projects = data;
    });
  }

  gotoProjectDetails(url, id) {
    this.router.navigate([url, id]).then( (e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }
}
