import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';
import { CartSessionService } from 'src/app/services/cart-session.service';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  @Output() addProduct: EventEmitter<Product> = new EventEmitter;

  product: any;
  selector: number[] = [1,2,3,4,5,6,7,8,9,10];
  amount: number = 0;

  constructor(private router: Router, private cartSessionService: CartSessionService) { 
    
    this.product = this.router.getCurrentNavigation()?.extras.state;
  }
  ngOnInit(): void {
    console.log("Hello Detail")
  }

  add(product: Product, amount: number): void {
    this.cartSessionService.addToCart(product, amount);
  }

}
