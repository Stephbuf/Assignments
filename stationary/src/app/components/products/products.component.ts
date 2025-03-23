import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products',
  standalone: false,
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

products;

constructor(service: ProductsService){
  this.products = service.getProducts();
    console.log(this.products);
}
  
}