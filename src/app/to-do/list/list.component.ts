import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Task from '../models/task.model';
import { faEdit, faEraser } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() task: Task;


  constructor() {
    this.task = new Task();

  }

  ngOnInit(): void {}

}
