import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TaskServiceProvider } from '../../providers/task-service/task-service';

import { TaskDetailsPage } from '../task-details/task-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: any[] = [];

  constructor(
    public navCtrl: NavController,
    public taskService: TaskServiceProvider
    ) {}

    ionViewDidLoad() {
      this.taskService.getAll()
      .subscribe(
        (data) => {
          this.tasks = data['tasks'];
        },
        (error) => {
          console.log(error);
        }
      );
    }

    taskTapped(event, task) {
      this.navCtrl.push(TaskDetailsPage, {
        task: task
      });
    }

    addTask() {
      console.log('Add task');
    }
}
