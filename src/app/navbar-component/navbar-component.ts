import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../login/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './navbar-component.html',
  styleUrls: ['./navbar-component.css'],
})
export class NavbarComponent {
  constructor(private loginService: LoginService, private router: Router) {}

  estaLogueado(): boolean {
    return this.loginService.estaLogueado();
  }

  logout(): void {
    this.loginService.logout();
  }

  goLogin(): void {
    this.router.navigate(['/login']);
  }

}
