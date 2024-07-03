import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private baseUrl = 'http://localhost:5000'; // Adjust URL based on your backend server

  constructor(private http: HttpClient) {}

  saveCustomer(customerData: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/customer`, customerData);
  }
}
