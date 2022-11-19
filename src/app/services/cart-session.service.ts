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
    if (this.products.includes(product)) {
      product.amount += amount;
      alert("Added to cart!")
    } else {
      this.products.push(product);
      product.amount = amount;
      alert("Added to cart!")
    };
  }

  removeFromCart(remProduct: Product):void {
    const newList = this.products.filter(product => product != remProduct)
    this.products = newList;
  }
}
