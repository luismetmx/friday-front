import { Component, OnInit } from '@angular/core';
import { FrapiService } from '../frapi.service';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  formGroup;

  projectData: FormGroup;
  tasksData: FormArray;
  resourcesData: FormArray;


  solutions;
  types = ['Go Nuts Migration', 'New Implementation', 'Upgrade', 'Migration', 'POC', 'Roll Out'];
  phases = ['ND', 'Prepare', 'Design', 'Construct', 'Validate', 'Deploy', 'Transition', 'Onboarding',
   'UAT', 'Cut Over', 'Hypercare', 'SIT'];

  constructor(private frapiservice: FrapiService, private formBuilder: FormBuilder) {
    this.projectData = this.formBuilder.group({
      name : '',
      solution : null,
      type : null,
      phase : null
    });
  }

  ngOnInit() {
    this.frapiservice.getSolutions().subscribe((data) => {
      this.solutions = data;
    });
  }

  public onSubmit(formData) {
    console.log(formData);
  }

}
