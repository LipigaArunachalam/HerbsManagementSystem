import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user.service';

interface LoginResponse {
  message: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router, 
    private http: HttpClient, 
    private userService: UserService) {}

  onSubmit(form: any) {
    const { name, password } = form;
    //this.http.post<LoginResponse>('http://localhost:5000/login', { name, password })
      this.userService.login({name, password}).subscribe(
        response => {
          console.log('Login successful:', response.message);
          // Redirect to home page on successful login
          this.router.navigate(['/home']);
        },
        error => {
          console.error('Login failed:', error.error.message);
          // Handle login failure, show error message
          alert('Login failed. Please check your credentials.');
        }
      );
  }
}
