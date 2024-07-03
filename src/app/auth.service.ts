import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:5000/login';

  constructor(private http: HttpClient) { }

  login(credentials: { name: string, password: string }): Observable<any> {
    return this.http.post(this.apiUrl, credentials);
  }

  // You can add other authentication-related methods here
}