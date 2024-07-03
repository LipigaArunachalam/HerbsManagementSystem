import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from '../cart.service';
import { NgForm } from '@angular/forms';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  cartItems = this.cartService.getCartItems();
  totalAmount = this.cartService.getTotalAmount();

  
  constructor(private cartService: CartService, 
    private router: Router) {}

  ngOnInit(): void {}

  onSubmit(paymentForm: NgForm) {
    if (paymentForm.valid) {

      const customerDetails = paymentForm.value;

      this.cartService.setOrderDetails({
        customer: customerDetails,
        items: this.cartItems,
        totalAmount: this.totalAmount

      });

      this.cartService.placeOrder().subscribe(
        response => {
          alert('Order placed successfully');
          this.cartService.clearCart(); // Clear cart after successful order
          this.router.navigate(['/order']);
        },
        error => {
          alert('Order placed!');
          console.error(error);
        }
      );
      
      this.router.navigate(['/order']);
    }
      else {
        alert('Please fill in all fields before submitting.');

    }
  }
}
