import { Component, Input, OnInit } from '@angular/core';
import Task from '../models/task.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input('tasks') listTask: Array<Task>;

  constructor() {
    this.listTask = []
  }

  ngOnInit(): void {
  }

}
