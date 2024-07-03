import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface SignupResponse {
  message: string;
}

interface LoginResponse {
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:5000'; // Adjust URL based on your backend server

  constructor(private http: HttpClient) {}

  signin(userData: { name: string, password: string }): Observable<SignupResponse> {
    return this.http.post<SignupResponse>(`${this.baseUrl}/signup`, userData);
  }

  login(userData: { name: string, password: string }): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(`${this.baseUrl}/login`, userData);
  }
}
