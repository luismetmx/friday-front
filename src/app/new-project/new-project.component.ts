import { Component, OnInit } from '@angular/core';
import { FrapiService } from '../frapi.service';



@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {

  projectName;
  projectSolution;
  projectType;
  projectPhase;

  solutions;
  types = ['Go Nuts Migration', 'New Implementation', 'Upgrade', 'Migration', 'POC', 'Roll Out'];
  phases = ['ND', 'Prepare', 'Design', 'Construct', 'Validate', 'Deploy', 'Transition', 'Onboarding',
   'UAT', 'Cut Over', 'Hypercare', 'SIT'];

  constructor(private frapiservice: FrapiService) { }

  ngOnInit() {
    this.frapiservice.getSolutions().subscribe((data) => {
      this.solutions = data;
    });
  }

  public onSubmit(formData) {
    console.log(formData);
  }

  setSolution(solutionID) {
    this.projectSolution = solutionID;
  }

}
