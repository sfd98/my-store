import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfirmationDetailsService {

  constructor() { }

  name = "";
  total = "";

  //continue implementing this service into confirmation
  setName(name: string): void {
    this.name = name;
  };

  setTotal(total: string): void {
    this.total = total;
  }

  getName(): string {
    return this.name;
  }

  getTotal(): string {
    return this.total
  }
}
