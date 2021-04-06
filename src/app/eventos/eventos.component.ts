import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  valor1: number;
  valor2: number;
  result: number;

  constructor() {
    this.valor1 = 7;
    this.valor2 = 81;
    this.result = 0;
   }

  ngOnInit(): void {
  }

  sumar() {
    this.result = this.valor1 + this.valor2
  }

}
