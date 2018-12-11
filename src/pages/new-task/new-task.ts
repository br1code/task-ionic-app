import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { TaskServiceProvider } from '../../providers/task-service/task-service';

@Component({
    selector: 'page-new-task',
    templateUrl: 'new-task.html'
})
export class NewTaskPage {
    task: any;
    
    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams,
        public loadingCtrl: LoadingController,
        public taskService: TaskServiceProvider) {
        this.task = {};
    }

    create(task) {
        let loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
      
        loading.present();

        this.taskService.create(task)
            .subscribe(
                (data) => {
                    loading.dismiss();
                    this.navCtrl.pop();
                },
                (error) => {
                    loading.dismiss();
                    console.log(error);
                }
            );
    }
}
  