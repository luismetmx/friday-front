import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FrapiService {
  FRAPI_URL = 'localhost:8081';
  constructor(private httpClient: HttpClient) { }

  public getTasks(){
    return this.httpClient.get(`http://${this.FRAPI_URL}/tasks/`);
  }
}
