import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
    { id: 4, name: 'Product 4', price: 40 },
    // Add more products as needed
  ];
  constructor(private cartService: CartService) {}

  getProducts() {
    return this.products;
  }

  addToCart(product: any) {
    this.cartService.addToCart(product);
  }

  getCartItems() {
    return this.cartService.getCartItems();
  }
}