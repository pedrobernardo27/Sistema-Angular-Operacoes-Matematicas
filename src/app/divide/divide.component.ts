import { Component } from '@angular/core';
import { OperacoesService } from '../operacoes/service/operacoes.service';

@Component({
  selector: 'app-divide',
  templateUrl: './divide.component.html',
  styleUrls: ['./divide.component.css']
})
export class DivideComponent {
  private res : number = 0;

  constructor(private operacoesService : OperacoesService){}

  dividir(numero1: string, numero2: string): void {
      let n1 : number;
      let n2 : number;

      n1 = parseFloat(numero1)
      n2 = parseFloat(numero2)

      this.res = this.operacoesService.dividir(n1, n2)
  }

  get resultado(): string {
    return this.res.toString();
  }
}
