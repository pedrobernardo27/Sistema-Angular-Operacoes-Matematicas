import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OperacoesModule } from './operacoes/operacoes.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    OperacoesModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
