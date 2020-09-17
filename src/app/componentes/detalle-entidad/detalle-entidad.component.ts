import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPersona } from 'src/app/clases/persona';

@Component({
  selector: 'app-detalle-entidad',
  templateUrl: './detalle-entidad.component.html',
  styleUrls: ['./detalle-entidad.component.css']
})
export class DetalleEntidadComponent implements OnInit {

  @Input() persona: IPersona;
  @Output() personaEliminada: EventEmitter<IPersona> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(){
    this.personaEliminada.emit(this.persona);
  }

}
