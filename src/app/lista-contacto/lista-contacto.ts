import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-contacto',
  imports: [],
  templateUrl: './lista-contacto.html',
  styleUrl: './lista-contacto.css',
})
export class ListaContacto {
  contactos: any[] = [];
  contacto: any = { nombre: '', email: '', telefono: '' };
  editIndex: number | null = null;
  dataService: any;

  editar(indice: number){
    this.editIndex = indice;
    this.contacto = { ...this.contacto[indice] };
  }

  eliminar(indice: number){
    this.dataService.eliminar_contacto(indice);
    setTimeout(() => this.loadContactos(), 300);
  }
  loadContactos(): void {
    throw new Error('Method not implemented.');
  }

}
