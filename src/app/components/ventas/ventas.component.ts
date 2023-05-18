import { Component } from '@angular/core';
import { VentasService } from 'src/app/services/ventas.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent {

  constructor(private servicio: VentasService) { }

  dataVentas: any;

  ngOnInit(): void {
    this.servicio.getClientes().subscribe(data=>{
      this.dataVentas = data;
  })

}

}
