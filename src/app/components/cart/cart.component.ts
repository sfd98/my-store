import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartSessionService } from 'src/app/services/cart-session.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {

  shoppingCart: Product[] = [];

  constructor(private cart: CartSessionService) {
    
  }

  ngOnInit(): void {
    this.shoppingCart = this.cart.products
    console.log("INIT CART")
    console.log(this.shoppingCart)
  }

}
