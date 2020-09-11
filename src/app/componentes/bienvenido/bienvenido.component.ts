import { Component, OnInit } from '@angular/core';
import { ServicioPaisesService } from "../../servicios/servicio-paises.service";

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  datosRecibidosDelServicio: any = [];
  mensajeDeError;

  constructor(private servicio: ServicioPaisesService) { }
  // constructor() { }

  // Ojo que si no agrego el HttpClientModule al APPMODULE no funciona, tira
  // error de nullInjectionError
  ngOnInit(): void {
    this.servicio.getDatos().subscribe(
      (datos: any) =>{
        this.datosRecibidosDelServicio = datos;
        console.log(datos);
      }
    );
  }
}
