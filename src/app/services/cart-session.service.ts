import { TypeofExpr } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartSessionService {

  products: Product[] = [];
  filteredCart: Product[] = [];
  constructor() {

  }
  
  addToCart(product: Product, amount: number) {

    //input
    if (this.products.includes(product)) {
      product.amount += amount;
      console.log("Added amount: " + amount);
    } else {
      this.products.push(product);
      product.amount = amount;
      console.log("Added amount: " + amount);
    };
    console.log(this.products);
    /*for (let i = 0; i<parseInt(amount); i++){
      this.products.push(product);
    }
    console.log(this.products);*/
  }

  /*calculateAmounts(productList: Product[]): Product[] {
    this.products.forEach((element) => {
      if (this.filteredCart.includes(element)) {
        element.amount += 1;
      } else {
        this.filteredCart.push(element);
        element.amount += 1;
      }
    })
    
    return this.filteredCart;
    
  };


  getProductsFromCart(): Product[]{
    return this.products;
  };
  */
}
