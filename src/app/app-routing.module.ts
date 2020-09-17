import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ControlEntidadComponent } from './componentes/control-entidad/control-entidad.component';

const routes: Routes = [
  {path: '', redirectTo: 'bienvenido', pathMatch: 'full'},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'control', component: ControlEntidadComponent},
  {path: '**', redirectTo: 'bienvenido', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
