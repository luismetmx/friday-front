import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatStepperModule, MatInputModule } from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule, MatSelect } from '@angular/material/select';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppEditTeamComponent } from './app-edit-team/app-edit-team.component';
import { AppTaskListComponent } from './app-task-list/app-task-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppTeamListComponent } from './app-team-list/app-team-list.component';
import { AppSolutionListComponent } from './app-solution-list/app-solution-list.component';
import { AppPendingTasksListComponent } from './app-pending-tasks-list/app-pending-tasks-list.component';
import { AppDashboardComponent } from './app-dashboard/app-dashboard.component';
import { TaskCountComponent } from './task-count/task-count.component';
import { TaskListEditorComponent } from './task-list-editor/task-list-editor.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { NewProjectComponent } from './new-project/new-project.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AppEditTeamComponent,
    AppTaskListComponent,
    AppTeamListComponent,
    AppSolutionListComponent,
    AppPendingTasksListComponent,
    AppDashboardComponent,
    TaskCountComponent,
    TaskListEditorComponent,
    ProjectListComponent,
    NewProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
