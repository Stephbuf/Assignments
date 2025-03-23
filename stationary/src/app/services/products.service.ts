import { Injectable } from '@angular/core';
import { Iproducts } from '../interfaces/iproducts';
import { products } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Iproducts[] = products;
  constructor() {}

  getProducts() {
    return this.products;
  }
}
