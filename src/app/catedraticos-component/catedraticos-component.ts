import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catedraticos-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catedraticos-component.html',
  styleUrls: ['./catedraticos-component.css'],
})
export class CatedraticosComponent {
  lista = [
  {nombre: '', materia: '', foto: ''},
  {nombre: '', materia: '', foto: ''},
  {nombre: '', materia: '', foto: ''},
  {nombre: '', materia: '', foto: ''},
  ];
}
