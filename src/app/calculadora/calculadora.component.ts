import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss'],
})
export class CalculadoraComponent implements OnInit {
  display: string;
  listButtons: Array<string>;
  regexOperation: RegExp;
  regexOperator: RegExp;
  regexNumber: RegExp;

  constructor() {
    this.display = '';
    this.regexOperator = /[ce=]/g;
    this.regexOperation = /[\*\-\+\/]/g;
    this.regexNumber = /[1-9]/;
    this.listButtons = ['1', '2', '3', '4','5','6','7','8','9', '0', '+','-','*', '/', 'ce', '='];
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

  operatorMath(value: string): boolean {
    if (value.match(this.regexOperator)) return true;
    return false;
  }

  operationMath(value: string): boolean {
    if (value.match(this.regexOperation)) return true;
    return false;
  }

  numberMath(valor: string): boolean {
    if (valor.match(this.regexNumber)) return true;
    return false;
  }
}
