import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPersona } from "../../clases/persona";

@Component({
  selector: 'app-listado-entidad',
  templateUrl: './listado-entidad.component.html',
  styleUrls: ['./listado-entidad.component.css']
})
export class ListadoEntidadComponent implements OnInit {

  @Input() datosMockaroo: IPersona[];
  @Output() datosOutput: EventEmitter<IPersona> = new EventEmitter();

  // @Input() datosPaises: any;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(dato){
    this.datosOutput.emit(dato);
    console.log(dato);
  }
}
