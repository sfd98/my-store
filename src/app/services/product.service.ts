import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/Product';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>("../../assets/data.json")
    /*return [
      {
        id: 1,
        name: "test",
        price: 12,
        url: "www.",
        description: "this is a test product"
      },
      {
        id: 2,
        name: "test2",
        price: 12,
        url: "www.123",
        description: "this is a test product"
      }
    ]*/
  }
}
