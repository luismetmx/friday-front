import { Component, OnInit } from '@angular/core';

import { FrapiService } from '../frapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-app-team-list',
  templateUrl: './app-team-list.component.html',
  styleUrls: ['./app-team-list.component.css']
})
export class AppTeamListComponent implements OnInit {
  teams;

  constructor(private frapiService: FrapiService, private router: Router) { }

  ngOnInit() {
    this.frapiService.getTeams().subscribe((data) => {
      console.log(data);
      this.teams = data;
    });
  }

  gotoTeamDetails(url, id) {
    this.router.navigate([url, id]).then( (e) => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }

}
