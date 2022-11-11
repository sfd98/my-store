import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Product } from 'src/app/models/Product';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input() product: Product;
  addProduct: EventEmitter<Product> = new EventEmitter;

  constructor(private router: Router) {
    this.product = {
      id: 0,
      name: "",
      price: 0,
      url: "",
      description: ""
    }
   }

  ngOnInit(): void {
  }

  add(product: Product): void {
    this.addProduct.emit(product);
  }

}
