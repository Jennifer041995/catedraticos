import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-registro',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './registro.html',
  styleUrl: './registro.css',
})
export class Registro implements OnInit, OnDestroy {
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    document.body.classList.add('login-page');
  }

  ngOnDestroy(): void {
    document.body.classList.remove('login-page');
  }

  register(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    const confirmPassword = form.value.confirmPassword;
    this.errorMessage = '';
    this.successMessage = '';

    if (form.invalid) {
      this.errorMessage = 'Complete el formulario correctamente.';
      return;
    }

    if (password !== confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    this.authService.register(email, password)
      .then(() => {
        this.successMessage = 'Registro exitoso. Redirigiendo al login...';
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      })
      .catch((error) => {
        this.errorMessage = error.message;
      });
  }
}
