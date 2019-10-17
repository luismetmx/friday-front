import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FrapiService } from '../frapi.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-app-edit-team',
  templateUrl: './app-edit-team.component.html',
  styleUrls: ['./app-edit-team.component.css']
})
export class AppEditTeamComponent implements OnInit {

  teamID: number;
  teamName: string;

  constructor(private frapi: FrapiService, private route: ActivatedRoute, private location: Location) {
  }

  getTeamData () {
    const teamData = {name: this.teamName};
    if (this.teamID !== 0 ){
      teamData['id'] = this.teamID;
    }
    return teamData;
  }

  onSubmit (formData) {
    console.log('formData: ', formData);
    const teamData = this.getTeamData();
    console.log('OnSubmit: ', teamData);
    if (this.teamID < 1 || this.teamID === undefined) {
      console.warn('Created team as:', teamData);
      this.frapi.createTeam(teamData).subscribe((data) => {
        console.log('Created team!', data);
        this.location.back();
      });
    } else {
      console.warn('Saved team as:', teamData);
      this.frapi.updateTeam(teamData['id'], teamData).subscribe( (data) => {
        console.log('Saved team!', data);
        this.location.back();
      });
    }
  }

  ngOnInit() {
    console.log('ngInit edit team');
    this.route.paramMap.subscribe(params => {
      console.log(params.get('id'));
      this.teamID = +params.get('id');

      if (this.teamID !== 0 ) {
        console.log('ngInit getting team');
        console.log(this.teamID);
        this.frapi.getTeam(this.teamID).subscribe( (data) => {
          console.log(data);
          if (data !== undefined){
            if (data['name'] !== undefined){
              this.teamID = data['id'];
              this.teamName = data['name'];
            }
          }
        });
      }
    });
  }

}
