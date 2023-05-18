import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor( private servicio: AuthService, private ruta: Router){}
  

  alias:string=""
  pass:string=""

  guardarJSON(){
    const temp={
      id: this.alias,
      pass: this.pass
    }
    this.limpiar()
    
    return temp;
  }

  //LIMPIAR INPUTS
  limpiar(){
    this.alias=""
    this.pass=""
  }

  login(){
    const aux= this.guardarJSON()

    this.servicio.getAlias().subscribe( p=>{
      for( const doc of p ){
        if( JSON.stringify(doc) == JSON.stringify(aux) ){
          console.log("Encontrado")
          localStorage.setItem('login', 'true')
          this.ruta.navigate(['/administrar'])
          break;
        }else{
          localStorage.setItem('login','false')
          this.ruta.navigate(['/registro'])
        }
      }
    })

  }
}
