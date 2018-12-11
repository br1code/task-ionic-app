import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TaskServiceProvider {

  constructor(public http: HttpClient) {}

  getAll() {
    return this.http.get('http://localhost:3000/tasks');
  }

  getOne(id) {
    return this.http.get('http://localhost:3000/tasks/' + id);
  }

  update(id, task) {
    return this.http.put('http://localhost:3000/tasks/' + id, {model: task});
  }

  create(task) {
    return this.http.post('http://localhost:3000/tasks', {model: task});
  }
}
