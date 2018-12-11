import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-task-details',
  templateUrl: 'task-details.html'
})
export class TaskDetailsPage {
  selectedTask: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedTask = navParams.get('task');
  }
}
