import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataServices } from '../data.services';

@Component({
  selector: 'app-lista-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catedraticos3-component.html',
  styleUrls: ['./catedraticos3-component.css'],
})
export class ListaContacto {
  lista = [
   {
      nombre: 'Docente de Ingeniería en Ciencias de la Computación',
      materia: 'Redes Informáticas',
      foto: 'https://scontent.fsal3-1.fna.fbcdn.net/v/t39.30808-6/555513091_1246153164218393_8987732672936788437_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGDFWnMWg3D4q5zuNcaTc3ZpvONXmQJAhem841eZAkCF4Wih0zpI0EKyOwl4-X21LXaN3bezoNGLhrOI7O17Rm1&_nc_ohc=X3bbRSqljEYQ7kNvwHT3fQ9&_nc_oc=Adk9loMR0ngl7ufFS55uWaLoy_37FN0g6f7Q2xT2MA_lNdAJAKzLUi8ygKmIfXOqNKl-7m0jQ8doGcp0vjqYCdrG&_nc_zt=23&_nc_ht=scontent.fsal3-1.fna&_nc_gid=J80x4N8sZpBNnFhpZ_Uzhg&oh=00_AfiBCbpFKyLBaKVuTU2h5rz5wOwRvQ0Z2QVAutfZjmZfLA&oe=692C4F32',
      descripcion: ' Experto en redes de computadoras y seguridad informática.',
    },
  ]
}
