import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from './login.service';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login implements OnInit, OnDestroy {
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    document.body.classList.add('login-page');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('login-page');
  }

  login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.errorMessage = '';
  if (form.invalid) {
    this.errorMessage = 'Complete el formulario correctamente.';
    return;
  }

  this.authService.login(email, password)
    .then(() => {
      // Login successful, navigation will be handled by auth state
    })
    .catch((error: any) => {
      console.error('Login error:', error);
      this.errorMessage = error.message;
    });
  }
}
