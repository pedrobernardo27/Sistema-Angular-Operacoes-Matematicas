import { Component } from '@angular/core';
import { OperacoesService } from '../operacoes/service/operacoes.service';

@Component({
  selector: 'app-subtrai',
  templateUrl: './subtrai.component.html',
  styleUrls: ['./subtrai.component.css']
})
export class SubtraiComponent {
  private res : number = 0;

  constructor(private operacoesService : OperacoesService){}

  subtrair(numero1: string, numero2: string): void {
      let n1 : number;
      let n2 : number;

      n1 = parseFloat(numero1)
      n2 = parseFloat(numero2)

      this.res = this.operacoesService.subtrair(n1, n2)
  }

  get resultado(): string {
    return this.res.toString();
  }
}
