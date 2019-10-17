import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppEditTeamComponent } from './app-edit-team/app-edit-team.component';
import { AppTaskListComponent } from './app-task-list/app-task-list.component';
import { AppTeamListComponent } from './app-team-list/app-team-list.component';
import { AppSolutionListComponent } from './app-solution-list/app-solution-list.component';

const routes: Routes = [
  { path: 'team/:id', component: AppEditTeamComponent },
  { path: 'solutions', component: AppSolutionListComponent },
  { path: 'teams', component: AppTeamListComponent },
  { path: 'tasks', component: AppTaskListComponent },
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: '**', redirectTo: '/tasks'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
