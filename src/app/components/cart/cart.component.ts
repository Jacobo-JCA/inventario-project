import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  myCart$ = this.servicio.myCart$
  
  constructor(private servicio:ProductsService) {}
  
  ngOnInit(): void {
    
  }  
}
