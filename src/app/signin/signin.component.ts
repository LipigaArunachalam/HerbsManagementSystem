import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  constructor(private userService: UserService) {}

  onSubmit(signinForm: NgForm) {
    const { name, password } = signinForm.value;
    this.userService.signin({ name, password }).subscribe(
      response => {
        console.log('User registered successfully', response);
        alert('User registered successfully');
      },
      error => {
        console.error('User registered', error);
        alert('User registered');
      }
    );
    
  }
}
