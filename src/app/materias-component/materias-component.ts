import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materias-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './materias-component.html',
  styleUrls: ['./materias-component.css'],
})
export class MateriasComponent {
  materias = [
    { nombre : '', profesor: '', horarios: '' },
    { nombre : '', profesor: '', horarios: '' },
    { nombre : '', profesor: '', horarios:  ''},
  ];
item: any;
}
