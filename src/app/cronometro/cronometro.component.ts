import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss'],
})
export class CronometroComponent implements OnInit {
  timeValue: number;
  interval: number;
  @Input() id: number;
  @Output() stateCronometro: EventEmitter<string>;

  constructor() {
    this.timeValue = 10;
    this.interval= 1000;
    this.id = 0;
    this.stateCronometro = new EventEmitter()
  }

  ngOnInit(): void {}

  startTimer() {
    let timeValuerOne = setInterval(() => {
      this.timeValue--;
      if (this.timeValue <= 0) {
        clearInterval(timeValuerOne);
        this.stateCronometro.emit(`cronometro ${this.id} ha fializado`)
      }
    }, this.interval);
  }
}
