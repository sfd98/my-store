import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';
import { CartSessionService } from 'src/app/services/cart-session.service';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Output() addProduct: EventEmitter<Product> = new EventEmitter;
  @Input() product: Product;

  selector: number[] = [1,2,3,4,5,6,7,8,9,10];
  amount: number = 0
  

  constructor(private router: Router, private cartSessionService: CartSessionService) {
    this.product = {
      id: 0,
      name: "",
      price: 0,
      url: "",
      description: "",
      amount: 0
    }
   }

  ngOnInit(): void {
  }

  add(product: Product, amount: number): void {
    //this.addProduct.emit(product);
    this.cartSessionService.addToCart(product, amount);
  }

}
