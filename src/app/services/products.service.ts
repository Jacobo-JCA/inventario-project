import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  private API_BEER='https://api.sampleapis.com/beers/ale';

  //lista de carro
  private myList: any[]=[];

  //carrito observable
  private myCart = new BehaviorSubject<any[]>([]);
  myCart$ = this.myCart.asObservable();

  public getBeer(): Observable <any> {
    return this.httpClient.get(this.API_BEER)
  }
  
  addBeer(beer: any) {
    if(this.myList.length === 0) {
      beer.cantidad = 1
      this.myList.push(beer)
      this.myCart.next(this.myList);
    } else{
      const beerMod = this.myList.find((element)=>{
        return element.id === beer.id
      })
      if(beerMod) {
        beerMod.cantidad = beerMod.cantidad + 1;
        this.myCart.next(this.myList);
      }else{
        beer.cantidad = 1;
        this.myList.push(beer);
        this.myCart.next(this.myList);
      }
    }
  
    
  }
}
