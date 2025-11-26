import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginService } from './login.service';
import { LoginModel } from './login-model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login implements OnInit, OnDestroy {
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    document.body.classList.add('login-page');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('login-page');
  }

  async login(form: NgForm): Promise<void> {
    const email = form.value.email;
    const password = form.value.password;
    this.errorMessage = '';
    if (form.invalid) {
      this.errorMessage = 'Complete el formulario correctamente.';
      return;
    }

    try {
      let userCredential: LoginModel = await this.authService.login(email, password) as unknown as LoginModel;
      const token: string = userCredential.user.stsTokenManager.accessToken || '';
      if (token) {
        localStorage.setItem('token', token);
        this.loginService.token = token;
      }
      this.router.navigate(['inicio']);
    } catch (error) {
      console.error('Login error:', error);
    }
  }
}
