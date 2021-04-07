import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {
  @Input() valor1: number;
  @Input() valor2: number;
  result: number;

  constructor() {
    this.valor1 = 0;
    this.valor2 = 0;
    this.result = 0;
   }

  ngOnInit(): void {
  }

  sumar() {
    this.result = this.valor1 + this.valor2
  }

}
