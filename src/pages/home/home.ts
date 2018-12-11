import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import { TaskServiceProvider } from '../../providers/task-service/task-service';

import { TaskDetailsPage } from '../task-details/task-details';
import { NewTaskPage } from '../new-task/new-task';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tasks: any[] = [];

  constructor(
    public navCtrl: NavController,
    public taskService: TaskServiceProvider,
    public loadingCtrl: LoadingController
    ) {}

    ionViewWillEnter() {
      this.taskService.getAll()
      .subscribe(
        (data) => this.tasks = data['tasks'],
        (error) => console.log(error)
      );
    }

    taskTapped(event, task) {
      let loading = this.loadingCtrl.create({
        content: 'Please wait...'
      });

      loading.present();

      this.taskService.getOne(task['_id'])
        .subscribe(
          (data) => {
            loading.dismiss();
            this.navCtrl.push(TaskDetailsPage, {task: data['task']});
          },
          (error) => {
            loading.dismiss();
            console.log(error);
          }
        );
    }

    addTask() {
      this.navCtrl.push(NewTaskPage);
    }
}
