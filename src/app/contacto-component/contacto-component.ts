import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataServices } from '../data.services';


@Component({
  selector: 'app-contacto-component',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf],
  templateUrl: './contacto-component.html',
  styleUrls: ['./contacto-component.css'],
})
export class ContactoComponent {
  contactos: any[] = [];
  contacto: any = { nombre: '', email: '', telefono: '' };
  editIndex: number | null = null;
  constructor(private dataService: DataServices) { }

  ngOnInit(): void {
    this.loadContactos();
  }

  loadContactos(){
    this.dataService.cargar_contactos().subscribe((data:any) => {
      if(!data){
        this.contactos = [];
        return;
      }
      if(Array.isArray(data)){
        this.contactos = data;
      } else {
        this.contactos = Object.values(data);
      }
    })
  }

  guardar(){
    if(this.editIndex === null){
      this.contactos.push(this.contacto);
      this.dataService.guardar_contactos(this.contactos);
      this.contacto = { nombre: '', email: '', telefono: '' };
    } else {
      this.dataService.actualizar_contacto(this.editIndex, this.contacto)
        .then(() => {
          this.contactos[this.editIndex!] = this.contacto;
          this.contacto = { nombre: '', email: '', telefono: '' };
          this.editIndex = null;
        }).catch((error:any) => console.error(error));
    }
  }
}
