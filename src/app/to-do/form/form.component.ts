import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import Task from '../models/task.model';
import { faSave } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  task: Task;
  iconSave = faSave;

  @Output() onSubmitData: EventEmitter<Task>;

  constructor() {
    this.task = new Task();
    this.onSubmitData = new EventEmitter();
  }

  ngOnInit(): void {}

  onClick() {
    this.onSubmitData.emit(this.task);
    this.task = new Task()
  }
}
