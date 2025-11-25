import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginService } from './login.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login implements OnInit, OnDestroy {
  errorMessage: string = '';

  constructor(private loginService: LoginService) { }

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
    this.loginService.login(email, password)
      .then(() => {
      })
      .catch((error) => {
        console.error('Login error:', error);
        this.errorMessage = 'Email o contraseña incorrectos.';
      });
  }

}
