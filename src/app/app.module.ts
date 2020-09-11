import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';
import { HttpClientModule } from '@angular/common/http';
import { ListadoEntidadComponent } from './componentes/listado-entidad/listado-entidad.component';

@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    ControlEntidadComponent,
    ListadoEntidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
