import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { IPersona } from '../clases/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioPaisesService {

  private linkMockaroo: string = 'https://api.mocki.io/v1/570c5e5c';
  private linkPaises: string = 'https://restcountries.eu/rest/v2/all'

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<IPersona[]>{
    return this.http.get<IPersona[]>(this.linkMockaroo);
  }

  // getPaises(){
  //   return this.http.get(this.linkPaises);
  // }
}
