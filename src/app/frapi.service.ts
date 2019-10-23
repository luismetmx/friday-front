import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrapiService {
  FRAPI_URL = 'localhost:8081';
  constructor(private httpClient: HttpClient) { }

  public getTasks() {
    return this.httpClient.get(`http://${this.FRAPI_URL}/tasks/`);
  }

  public createTeam(teamData) {
    console.log('Create Team REST API CALL ', teamData);
    return this.httpClient.post(`http://${this.FRAPI_URL}/createteam/`, teamData);
  }

  public updateTeam(teamID: number, teamData) {
    return this.httpClient.put(`http://${this.FRAPI_URL}/updateteam/${teamID}`, teamData);
  }

  public getTeams() {
    return this.httpClient.get(`http://${this.FRAPI_URL}/teams/`);
  }

  public getTeam(teamID: number) {
    return this.httpClient.get(`http://${this.FRAPI_URL}/team/${teamID}`);
  }

  public getSolutions() {
    return this.httpClient.get(`http://${this.FRAPI_URL}/solutions/`);
  }

  public createSolution(solutionData) {
    return this.httpClient.post(`http://${this.FRAPI_URL}/createsolution/`, solutionData);
  }

  public updateSolution(solutionID: number, solutionData) {
    return this.httpClient.post(`http://${this.FRAPI_URL}/updatesolution/${solutionID}`, solutionData);
  }

  public getExeTasks() {
    return this.httpClient.get(`http://${this.FRAPI_URL}/executiontasks/`);
  }

  public getExeTasksByStatus(status: string) {
    return this.httpClient.get(`http://${this.FRAPI_URL}/executiontasksbystatus/?status=${status}`);
  }

  public getExeTasksByProject(projectID: number) {
    return this.httpClient.get(`http://${this.FRAPI_URL}/project/${projectID}/tasks/`);
  }

  public getProjectTemplate(projectType: string, projectPhase: string, solutionID: number) {
    return this.httpClient.get(
      `http://${this.FRAPI_URL}/projecttemplate/?type=${projectType}&phase=${projectPhase}&solution=${solutionID}`
      );
  }

  public getProjects() {
    return this.httpClient.get(`http://${this.FRAPI_URL}/projects/`);
  }

  public createProject(projectData) {
    return this.httpClient.post(`http://${this.FRAPI_URL}/createproject/`, projectData);
  }

  public createProjectExeTasks(projectID: number, exetasks) {
    return this.httpClient.post(`http://${this.FRAPI_URL}/project/${projectID}/createtasks/`, exetasks);
  }
}
