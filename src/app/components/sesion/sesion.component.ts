import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent {

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
          localStorage.setItem('sesion', 'true')
          this.ruta.navigate(['/administrar'])
          break;
        }else{
          localStorage.setItem('sesion','false')
          this.ruta.navigate(['/registro'])
        }
      }
    })

    
  }
}


