import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppEditTeamComponent } from './app-edit-team/app-edit-team.component';
import { AppTaskListComponent } from './app-task-list/app-task-list.component';
import { FormsModule } from '@angular/forms';
import { AppTeamListComponent } from './app-team-list/app-team-list.component';
import { AppSolutionListComponent } from './app-solution-list/app-solution-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AppEditTeamComponent,
    AppTaskListComponent,
    AppTeamListComponent,
    AppSolutionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
