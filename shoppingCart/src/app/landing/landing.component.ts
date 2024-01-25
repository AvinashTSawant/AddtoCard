import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  products;

  constructor(private productService: ProductService) {}
  
  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: any) {
 
    this.productService.addToCart(product)
    console.log(product);
    

 
    
  }
}
