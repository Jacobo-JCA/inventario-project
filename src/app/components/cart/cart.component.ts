import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  myCart$ = this.servicio.myCart$
  total: number = 0;
  
  constructor(private servicio:ProductsService) {}
  
  ngOnInit(): void {
  
  }

  totalProduct(price: string, units: number) {
    
    const fragmento = price.substring(1, );
    const parsedPrice = parseFloat(fragmento);
    return parsedPrice * units;
  }

  deleteProduct(id:number) {
    this.servicio.deleteProduct(id);
  }

  totalCart() {
    const result = this.servicio.totalCart();
    console.log(result)
    return result;
  }

}
