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
    console.log(this.products);
    if (this.products.includes(product)) {
      product.amount += amount;
    } else {
      this.products.push(product);
      product.amount = amount;
    };
  }
}
