import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DataServices } from '../data.services';


@Component({
  selector: 'app-contacto-component',
  standalone: true,
  imports: [CommonModule, FormsModule,],
  templateUrl: './contacto-component.html',
  styleUrls: ['./contacto-component.css'],
})
export class ContactoComponent {
  contactos: any[] = [];
  contacto: any = { id: '', nombre: '', email: '', telefono: '' };
  editId: string | null = null;
  message: string = '';
  messageType: 'success' | 'error' | '' = '';
  showDeleteModal: boolean = false;
  deletingContactId: string | null = null;
  constructor(private dataService: DataServices, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadContactos();
    this.route.queryParams.subscribe(params => {
      const id = params['id'];
      if(id){
        this.dataService.get_contact(id).subscribe((c:any) => {
          if(c){
            this.editId = id;
            this.contacto = { id, nombre: c.nombre, email: c.email, telefono: c.telefono };
          }
        })
      }
    });
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
    if(!this.contacto.nombre || !this.contacto.email){
      this.messageType = 'error';
      this.message = 'Nombre y correo son obligatorios.';
      return;
    }

    if(this.editId === null){
      const contactoToCreate = { nombre: this.contacto.nombre, email: this.contacto.email, telefono: this.contacto.telefono, estado: 'activo' };
      this.dataService.crear_contacto(contactoToCreate).then((res:any) => {
        const id = res.name || '';
        const newContact = { id, ...contactoToCreate };
        this.contactos.push(newContact);
        this.contacto = { id: '', nombre: '', email: '', telefono: '' };
        this.messageType = 'success';
        this.message = 'Contacto guardado correctamente.';
        setTimeout(() => { this.message = ''; this.messageType = ''; }, 3500);
        this.router.navigate(['/lista-contacto']);
      }).catch((error:any) => {
        console.error(error);
        this.messageType = 'error';
        this.message = 'Error al guardar el contacto.';
      });
    } else {
      this.dataService.actualizar_contacto(this.editId as string, this.contacto)
        .then(() => {
          const index = this.contactos.findIndex(c => c.id === this.editId);
          if(index > -1) this.contactos[index] = this.contacto;
          this.contacto = { id: '', nombre: '', email: '', telefono: '' };
          this.editId = null;
          this.messageType = 'success';
          this.message = 'Contacto actualizado correctamente.';
          setTimeout(() => { this.message = ''; this.messageType = ''; }, 3500);
          this.router.navigate(['/lista-contacto']);
        }).catch((error:any) => console.error(error));
    }
  }

  // modal handling
  openDeleteModal(id: string){
    this.deletingContactId = id;
    this.showDeleteModal = true;
  }

  confirmDelete(){
    if(this.deletingContactId){
      this.dataService.eliminar_contacto(this.deletingContactId);
      // Optimistically remove
      const idx = this.contactos.findIndex(c => c.id === this.deletingContactId);
      if(idx > -1) this.contactos.splice(idx, 1);
      this.messageType = 'success';
      this.message = 'Contacto eliminado.';
      setTimeout(() => { this.message = ''; this.messageType = ''; }, 3500);
    }
    this.cancelDelete();
  }

  cancelDelete(){
    this.deletingContactId = null;
    this.showDeleteModal = false;
  }
}
