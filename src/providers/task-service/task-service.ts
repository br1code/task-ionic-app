import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskServiceProvider {

  constructor(public http: HttpClient) {}

  getAll() {
    return this.http.get('http://localhost:3000/tasks');
  }
}
