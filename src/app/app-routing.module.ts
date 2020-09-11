import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';

const routes: Routes = [
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: '', redirectTo: 'bienvenido', pathMatch: 'full'},
  {path: '**', redirectTo: 'bienvenido', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
