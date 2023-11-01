import { Component } from '@angular/core';
import { OperacoesService } from '../operacoes/service/operacoes.service';

@Component({
  selector: 'app-multiplica',
  templateUrl: './multiplica.component.html',
  styleUrls: ['./multiplica.component.css']
})
export class MultiplicaComponent {
  private res : number = 0;

  constructor(private operacoesService : OperacoesService){}

  multiplicar(numero1: string, numero2: string): void {
      let n1 : number;
      let n2 : number;

      n1 = parseFloat(numero1)
      n2 = parseFloat(numero2)

      this.res = this.operacoesService.miltiplicar(n1, n2)
  }

  get resultado(): string {
    return this.res.toString();
  }
}
