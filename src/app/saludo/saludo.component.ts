import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {

  mensaje: string;

  constructor() {
    this.mensaje = 'las cosas que se pueden hacer';
  }

  ngOnInit(): void {
  }

}
