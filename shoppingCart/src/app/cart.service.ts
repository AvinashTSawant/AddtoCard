import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: any[] = [];

  getCartItems() {
    return this.cartItems;
  }

  addToCart(product: any) {
    this.cartItems.push(product);
   
    
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  clearCart() {
    this.cartItems = [];
  }
}
