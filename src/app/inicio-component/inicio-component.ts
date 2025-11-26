import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-inicio-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inicio-component.html',
  styleUrls: ['./inicio-component.css'],
})
export class InicioComponent {
  center: any;

  constructor(private router: Router) {}

  volverHome() {
    this.router.navigate(['/inicio']);
  }

}