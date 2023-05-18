import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VentasService {

  constructor(private http: HttpClient) { }

  private Api_Clientes = 'http://localhost:3000/products';

  getClientes():Observable<any>{
    return this.http.get(this.Api_Clientes);
  }

 postClientes(user: any):Observable<any>{
  return this.http.post(this.Api_Clientes, user);
}

putClientes(user: any, id:string):Observable<any>{
this.Api_Clientes = `${this.Api_Clientes}/${id}`
return this.http.put(this.Api_Clientes, user);
}

deleteClientes(id:number):Observable<any>{
this.Api_Clientes = `${this.Api_Clientes}/${id}`
return this.http.delete(this.Api_Clientes);
}

}
