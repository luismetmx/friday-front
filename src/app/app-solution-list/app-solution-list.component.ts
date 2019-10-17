import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FrapiService } from '../frapi.service';

@Component({
  selector: 'app-app-solution-list',
  templateUrl: './app-solution-list.component.html',
  styleUrls: ['./app-solution-list.component.css']
})
export class AppSolutionListComponent implements OnInit {
  solutions;

  constructor(private frapiService: FrapiService, private router: Router) { }

  ngOnInit() {
    this.frapiService.getSolutions().subscribe((data) => {
      console.log(data);
      this.solutions = data;
    });
  }

  gotoSolutionDetails(url, id) {
    this.router.navigate([url, id]).then( (e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }

}
