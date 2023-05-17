import { Component } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-administrar-productos',
  templateUrl: './administrar-productos.component.html',
  styleUrls: ['./administrar-productos.component.css']
})
export class AdministrarProductosComponent {

  viewCart: boolean=false;

  constructor(private servicio: ProductsService) {}

  dataBeer: any;

  ngOnInit() {
    this.servicio.getBeer().subscribe(beer => {
      this.dataBeer=beer
    })
  }

  onToggleCart(){
    this.viewCart = !this.viewCart
  }

  addToCart(beer: any) {
    return this.servicio.addBeer(beer);
  }
}
