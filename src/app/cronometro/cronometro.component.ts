import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.scss'],
})
export class CronometroComponent implements OnInit {
  timeValue: number;
  interval: number;

  constructor() {
    this.timeValue = 10;
    this.interval= 1000;
  }

  ngOnInit(): void {}

  startTimer() {
    let timeValuerOne = setInterval(() => {
      this.timeValue--;
      if (this.timeValue <= 0) {
        clearInterval(timeValuerOne);
      }
    }, this.interval);
  }
}
