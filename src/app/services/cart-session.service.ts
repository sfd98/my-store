import { TypeofExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartSessionService {

  products: Product[] = [];
  constructor() {

  }
  
  addToCart(product: Product, amount: number): void {

    //initial push needed or the forEach will not work...
    if (this.products.length === 0) {
      this.products.push(product);
      product.amount = amount;
    }

    this.products.forEach(element => {
      if (element.id === product.id) {
        product.amount += amount;
      } else {
        this.products.push(product);
        product.amount = amount;
      }
    });

  }

  removeFromCart(remProduct: Product):void {
    const newList = this.products.filter(product => product != remProduct)
    this.products = newList;
  }
}
