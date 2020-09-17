import { Component, OnInit } from '@angular/core';
import { IPersona } from 'src/app/clases/persona';
import { ServicioPaisesService } from 'src/app/servicios/servicio-paises.service';

@Component({
  selector: 'app-control-entidad',
  templateUrl: './control-entidad.component.html',
  styleUrls: ['./control-entidad.component.css']
})
export class ControlEntidadComponent implements OnInit {

  personaSeleccionada: IPersona;
  personasTraidas: IPersona[];
  personasEliminadas: IPersona[] = [];

  constructor(private servicio: ServicioPaisesService) { }

  ngOnInit(): void {
    this.servicio.getPersonas().subscribe(datoTraido => {
      this.personasTraidas = datoTraido;
    })
  }

  onEventEmit(evento:IPersona){
    this.personaSeleccionada = evento;
  }

  borrarPersona(persona: IPersona){
    this.personasTraidas = this.personasTraidas.filter(item => JSON.stringify(item) !== JSON.stringify(persona));
    this.personasEliminadas.push(persona);
  }
}
