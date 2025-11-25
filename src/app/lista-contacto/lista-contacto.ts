import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { DataServices } from '../data.services';

@Component({
  selector: 'app-lista-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-contacto.html',
  styleUrls: ['./lista-contacto.css'],
})
export class ListaContacto {
  contactos: any[] = [];
  contacto: any = { nombre: '', email: '', telefono: '' };
  editIndex: number | null = null;
  showDeleteModal: boolean = false;
  deletingContactIndex: number | null = null;
  constructor(private dataService: DataServices, private router: Router) {}

  ngOnInit(): void {
    this.loadContactos();
  }

  loadContactos(){
    this.dataService.cargar_contactos().subscribe((data:any) => {
      if(!data){
        this.contactos = [];
        return;
      }
      if (Array.isArray(data)){
        this.contactos = data.map((item, idx) => ({ id: item?.id || String(idx), ...item }));
      } else {
        this.contactos = Object.keys(data).map(k => ({ id: k, ...data[k] }));
      }
      this.contactos.forEach(contacto => {
        if (!contacto.estado) {
          contacto.estado = 'activo';
        }
      });
    });
  }

  editar(indice: number){
    const c = this.contactos[indice];
    this.router.navigate(['/contacto'], { queryParams: { id: c.id } });
  }

  eliminar(indice: number){
    this.openDeleteModal(indice);
  }

  openDeleteModal(index: number){
    this.deletingContactIndex = index;
    this.showDeleteModal = true;
  }

  confirmDelete(){
    if(this.deletingContactIndex === null) return;
    const idx = this.deletingContactIndex;
    const c = this.contactos[idx];
    if(c?.id){
      this.dataService.eliminar_contacto(c.id);
    }
    this.contactos.splice(idx, 1);
    this.cancelDelete();
  }

  cancelDelete(){
    this.deletingContactIndex = null;
    this.showDeleteModal = false;
  }

  toggleEstado(indice: number){
    const c = this.contactos[indice];
    c.estado = c.estado === 'activo' ? 'inactivo' : 'activo';
    if(c?.id){
      this.dataService.actualizar_contacto(c.id, c);
    } else {
      this.dataService.guardar_contactos(this.contactos);
    }
  }

}
