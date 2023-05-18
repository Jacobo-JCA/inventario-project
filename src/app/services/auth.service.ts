import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http:HttpClient) { }

  private API_ALIAS="http://localhost:3000/user"

  getAlias():Observable<any>{
    return this.http.get(this.API_ALIAS);
  }
}