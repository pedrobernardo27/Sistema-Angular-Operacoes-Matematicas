import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperacoesService {

  constructor() { }

  somar(numero1 : number, numero2 : number) : number {
    let resultado = numero1 + numero2;
    return resultado;
  }

  subtrair(numero1 : number, numero2 : number) : number{
    let resultado = numero1 - numero2;
    return resultado;
  }

  miltiplicar(numero1 : number, numero2 : number) : number{
    let resultado = numero1 * numero2;
    return resultado;
  }

  dividir(numero1 : number, numero2 : number) : number{
    let resultado = numero1 / numero2;
    return resultado;
  }
}
