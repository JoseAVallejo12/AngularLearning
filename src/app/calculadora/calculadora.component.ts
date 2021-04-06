import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  display: string;

  constructor() {
    this.display = '';
  }

  ngOnInit(): void {}

  onClick(e: any) {
    if (e.target.name == '=') {
      this.display = eval(this.display);
    } else if (e.target.name == 'ce') {
      this.display = '';
    } else {
      this.display += e.target.name;
    }
  }
}
