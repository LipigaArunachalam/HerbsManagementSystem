import { Component } from '@angular/core';
import { CartService } from '../cart.service';

interface Product {
  name: string;
  price: number;
  image: string; // Add image property to Product interface
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products: Product[] = [
    { name: 'Basil', price: 10.99, image: 'assets/basil.jpeg' },
    { name: 'Lavender', price: 8.99, image: 'assets/lavender.jpeg' },
    { name: 'Mint', price: 4.21, image: 'assets/mint.jpeg' },
    { name: 'Oregano', price: 6.95, image: 'assets/oregano.jpeg' },
    { name: 'Parsley', price: 9.37, image: 'assets/parsley.jpeg' },
    { name: 'Rosemary', price: 11.69, image: 'assets/rosemary.jpg' },
    { name: 'Sage', price: 7.14, image: 'assets/sage.jpeg' },
    { name: 'Thyme', price: 15.02, image: 'assets/thyme.jpeg' }
  ];

  constructor(private cartService: CartService) {}

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    console.log('Adding to cart:', product);
  }
}
