import { Component } from '@angular/core';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor(private servicio: VentasService) { }

  saveCliente(id: string, product: string, name: string){
    const cliente = {
      id: id,
      product: product,
      first_name: name
    };
    this.servicio.postClientes(cliente).subscribe(obj=>{
      console.log(cliente);
    })

}

updateCliente(id: string, product: string, name: string){
  const cliente = {
    id: id,
    product: product,
    first_name: name
  };
  this.servicio.putClientes(cliente, id).subscribe(data=>{
    console.log(data);
  })

}

deleteCliente(id: string){
  const ide: number= parseInt(id)
  this.servicio.deleteClientes(ide).subscribe(data=>{
    console.log(data);
  })
}

}
