import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any[] = [];

  // constructor(private productService: ProductService) {}
  constructor(private cartService: CartService) {}
  

  ngOnInit(): void {
    this.cart=this.cartService.getCartItems()
  }


  addToCart(product: any) {
    this.cart.push(product);
  }

  
  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  getTotalCost() {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
