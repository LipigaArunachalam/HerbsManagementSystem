import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CustomerService } from './customer.service';
import { switchMap } from 'rxjs';

interface Product {
  name: string;
  price: number;
  image:string;
}

interface OrderDetails {
  customer: any;
  items: Product[];
  totalAmount: number;
}

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: Product[] = [];
  private orderDetails: OrderDetails | null = null;

  constructor(private http: HttpClient,
    private customerService: CustomerService
  ) {}

  addToCart(product: Product) {
    this.cartItems.push(product);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  removeFromCart(index: number) {
    this.cartItems.splice(index, 1);
  }

  getTotalAmount(): number {
    return this.cartItems.reduce((total, item) => total + item.price, 0);
  }

  setOrderDetails(details: OrderDetails) {
    this.orderDetails = details;
  }

  getOrderDetails(): OrderDetails | null {
    return this.orderDetails;
  }

  clearCart() {
    this.cartItems = [];
  }

  placeOrder(): Observable<any> {
    const orderDetails = this.orderDetails;
    if (!orderDetails) {
      throw new Error('Order details are not set');
    }

    // Save customer details separately
    //return this.customerService.saveCustomer(orderDetails.customer).pipe(
      //switchMap(() => {
        // If customer save is successful, proceed to place order
        return this.http.post<any>('http://localhost:5000/order', orderDetails);
     // })
    //);
  }

  // placeOrder(orderDetails: OrderDetails): Observable<any> {
  // return this.http.post<any>('http://localhost:5000/order', orderDetails); 
  // }
}
