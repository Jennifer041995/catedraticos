import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataServices } from '../data.services';
import { DocenteModel, DocenteResponse } from '../models/docente-mode';
import { Observable, catchError, map, of } from 'rxjs';

@Component({
  selector: 'app-catedraticos-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catedraticos-component.html',
  styleUrls: ['./catedraticos-component.css'],
})
export class CatedraticosComponent implements OnInit {
  lista = [
    {
      nombre: 'Docente de Licenciatura en Ciencias Jurídicas',
      materia: 'Legislación Empresarial',
      foto: 'https://scontent.fsal3-1.fna.fbcdn.net/v/t39.30808-6/487217675_1100400922126952_3114646161043834105_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEmO3Z7lMX5NhU--orI1uQJasSy24Rd-L1qxLLbhF34vUGx_rreXHIZTlJp8b7c5hYdKR3Bg3T6bzLn74twQjro&_nc_ohc=r3WfgRKMq-0Q7kNvwE4Fh1E&_nc_oc=AdkZ8csKCvqUCudOmctNoXiZGLcaj8CjzXZNyeuj8cxLLTWkTWFZMu1GOYxxOleyFxCL8QhsHlKnsRmiDjK7h_29&_nc_zt=23&_nc_ht=scontent.fsal3-1.fna&_nc_gid=uyLyKJm0Fbb5M_3pS1m1qg&oh=00_Afj_yurPFmWstyl9c1wAnvf4zARGRw0SNzL0is0wTDtTVQ&oe=692C3A10',
      descripcion: 'Docente experto en derecho empresarial y legislación aplicada en leyes.'
    },
  ];

  public hasError = false;
  public catedraticos$!: Observable<DocenteModel[]>;

  constructor(private dataService: DataServices){}

  ngOnInit(): void {
    this.catedraticos$ = this.getListaDocs().pipe(
      map((response) => (response ? Object.values(response) : [])),
      catchError((error) => {
        console.error('Error cargando catedráticos', error);
        this.hasError = true;
        return of([]);
      })
    );
  }

  private getListaDocs(): Observable<DocenteResponse | null>{
    return this.dataService.cargar_catedraticos();
  }
}
