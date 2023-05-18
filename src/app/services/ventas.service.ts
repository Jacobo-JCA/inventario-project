import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }

  private Api_Clientes = ' http://localhost:3000';

  getClientes():Observable<any>{
    return this.http.get(this.Api_Clientes);
  }
}
