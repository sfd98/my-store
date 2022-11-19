import { Component, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartSessionService } from 'src/app/services/cart-session.service';
import { Router } from '@angular/router';
import { ConfirmationDetailsService } from 'src/app/services/confirmation-details.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})

export class CartComponent implements OnInit {

  shoppingCart: Product[] = [];
  amount: number = 0;
  name: string = "";
  adress: string = "";
  ccnumber: string = "";

  constructor(private cart: CartSessionService, private router: Router, private confirmationDetails: ConfirmationDetailsService) {
    
  }

  ngOnInit(): void {
    this.shoppingCart = this.cart.products
  }

  calculate(): string {
    let sum = 0;
    for (let i = 0; i < this.shoppingCart.length; i++) {
      sum += this.shoppingCart[i].price*this.shoppingCart[i].amount;
    }
    return sum.toFixed(2);
  }

  submit(): void {
    if ((this.name.length < 3) || (this.adress.length < 6) || (this.ccnumber.length != 16)) {
      alert("Check your input"); 
    } else {
      this.confirmationDetails.setName(this.name);
      this.confirmationDetails.setTotal(this.calculate());
      this.router.navigateByUrl('/confirmation');
    }
  }

  remove(product:Product): void {
    this.cart.removeFromCart(product);
    this.ngOnInit();
    alert("Product removed!");
  }

}
