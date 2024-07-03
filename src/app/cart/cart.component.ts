import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

interface CartItem {
  name: string;
  price: number;
  image:string;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: CartItem[] = this.cartService.getCartItems(); // Get cart items from service

  constructor(private cartService: CartService, private router: Router) {}

  removeItem(index: number) {
    this.cartService.removeFromCart(index); // Remove item using service
    this.cartItems = this.cartService.getCartItems(); // Update cart items
  }

  goToCalculator() {
    this.router.navigate(['/payment']);
  }
}
