import { Component, OnInit } from '@angular/core';
import Task from '../models/task.model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],
})
export class DisplayComponent implements OnInit {
  listTask: Task[];
  constructor() {
    this.listTask = [];
  }

  ngOnInit(): void {

  }

  receiveData(event: Task) {
    this.listTask.push(event)
    console.log(this.listTask)
  }


  onClickDelTask(key: string) {
    this.listTask = this.listTask.filter((elemnt) => elemnt.id != key)
  }
}
