import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TaskServiceProvider } from '../../providers/task-service/task-service';

@Component({
  selector: 'page-task-details',
  templateUrl: 'task-details.html'
})
export class TaskDetailsPage {
  selectedTask: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public taskService: TaskServiceProvider,
    public loadingCtrl: LoadingController
    ) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedTask = navParams.get('task');
  }

  update(task) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.taskService.update(task['_id'], task)
      .subscribe(
        (data) => {
          loading.dismiss();
        },
        (error) => {
          console.log(error);
          loading.dismiss();
        }
      );
  }
}
