import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  
  product: any
  addProduct: EventEmitter<Product> = new EventEmitter;

  constructor(private router: Router) { 
    
    this.product = this.router.getCurrentNavigation()?.extras.state;
  }
  ngOnInit(): void {
    console.log("Hello Detail")
  }

  add(product: Product): void {
    this.addProduct.emit(product);
  }

}
