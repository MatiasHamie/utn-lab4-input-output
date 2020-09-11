import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ServicioPaisesService {

  private linkMockaroo: string = 'https://api.mocki.io/v1/570c5e5c';

  constructor(private http: HttpClient) { }

  getDatos(){
    return this.http.get(this.linkMockaroo);
  }
}
