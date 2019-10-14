import { Component, OnInit } from '@angular/core';

import { FrapiService } from '../app/frapi.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'friday';
  tasks = [{name: 'Task 1', owner: 'Owner 1', date: '2019Oct-10', status: 'Green', team: 'Team 1'}];

  constructor(private frapiService: FrapiService){}

  ngOnInit() {
    /*
    this.frapiService.getTasks().subscribe((data) => {
      console.log(data);
      this.tasks = data['tasks'];
    });*/
  }
}
