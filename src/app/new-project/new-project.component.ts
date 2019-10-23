import { Component, OnInit } from '@angular/core';
import { FrapiService } from '../frapi.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { ProjectEntity } from '../projectEntity';

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

  project: ProjectEntity;


  solutions;
  types = ['Go Nuts Migration', 'New Implementation', 'Upgrade', 'Migration', 'POC', 'Roll Out'];
  phases = ['ND', 'Prepare', 'Design', 'Construct', 'Validate', 'Deploy', 'Transition', 'Onboarding',
   'UAT', 'Cut Over', 'Hypercare', 'SIT'];

  constructor(private frapiservice: FrapiService, private formBuilder: FormBuilder) {
    this.projectData = this.formBuilder.group({
      name : '',
      solution : '',
      type : '',
      phase : ''
    });
  }

  get pD() { return this.projectData.controls; }

  ngOnInit() {
    this.frapiservice.getSolutions().subscribe((data) => {
      this.solutions = data;
    });
  }

  onStepChange(event) {
    console.log(event);
    if (event.previouslySelectedIndex === 0 && event.selectedIndex === 1 ) {
      this.project = new ProjectEntity();
      this.project.name = this.pD['name'].value;
      this.project.type = this.pD['type'].value;
      this.project.phase = this.pD['phase'].value;
      this.project.solution = this.pD['solution'].value;
    }
  }

  public onSubmit(formData) {
    console.log(formData);
  }

}
