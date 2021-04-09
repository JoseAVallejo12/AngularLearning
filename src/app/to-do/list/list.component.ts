import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Task from '../models/task.model';
import { faEdit, faEraser, faSave } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Input() task: Task;
  iconEdit = faEdit;
  iconDelete = faEraser;
  iconSave = faSave;
  editTask: boolean;
  classnameOne: string;
  labelButtonEditSave: string;


  constructor() {
    this.task = new Task();
    this.editTask = false;
    this.classnameOne = 'is-outlined'
    this.labelButtonEditSave = 'Edit'
  }

  ngOnInit(): void {}

  onClickEdit(){
    if (this.editTask) {
      this.editTask = false;
      this.classnameOne = 'is-outlined';
      this.labelButtonEditSave = 'Edit';
    } else {
      this.editTask = true;
      this.classnameOne = ''
      this.labelButtonEditSave = 'Save';
    }
  }

}
