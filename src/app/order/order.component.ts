import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderDetails = this.cartService.getOrderDetails();
  
  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  goHome() {
    this.cartService.clearCart();
    this.router.navigate(['/home']);
  }
}
