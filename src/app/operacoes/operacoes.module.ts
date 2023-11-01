import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SomaComponent } from '../soma/soma.component';
import { DivideComponent } from '../divide/divide.component';
import { MultiplicaComponent } from '../multiplica/multiplica.component';
import { SubtraiComponent } from '../subtrai/subtrai.component';
import { OperacoesService } from './service/operacoes.service';

@NgModule({
  declarations: [
    SomaComponent,
    DivideComponent,
    MultiplicaComponent,
    SubtraiComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SomaComponent,
    DivideComponent,
    SubtraiComponent,
    MultiplicaComponent
  ],
  providers: [
    OperacoesService
  ]
})
export class OperacoesModule { }
