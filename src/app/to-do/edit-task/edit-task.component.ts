import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  @Input() edit: boolean;
  @Input() data: string;

  constructor() {
    this.edit = false;
    this.data = '';
  }

  ngOnInit(): void {
  }

}
