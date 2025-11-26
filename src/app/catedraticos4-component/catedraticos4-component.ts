import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-materias-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catedraticos4-component.html',
  styleUrls: ['./catedraticos4-component.css'],
})
export class MateriasComponent {
 lista = [
   {
      nombre: 'Docente de Licenciatura en Administración de Empresas',
      materia: '',
      foto: 'https://scontent.fsal3-1.fna.fbcdn.net/v/t39.30808-6/492505358_1121772523323125_4817827962831976632_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF8POnvhRsjNW6KXmr3gcvfQdb4PhZgjr1B1vg-FmCOvcvrzWcigd-4eyIQYJwXQixFe2-SBKEbmM_p8KOfTP-K&_nc_ohc=njMxiPCgAMsQ7kNvwGyCgAT&_nc_oc=AdlBJg0Aexc8MOYtSWQPj8Hi4Bg4v7WbiMT6O8g7Cx3tED_nP4qlmM-CAVOAU0xHBnH38-cEjLTJjp_Ue4DDX3Bx&_nc_zt=23&_nc_ht=scontent.fsal3-1.fna&_nc_gid=gK06dI0reEymnTR5t1D65A&oh=00_AfgcWjBaeFQiAxfvfH0pa_NG4WocAwftyn9CDKWEJOmjlg&oe=692C65DB',
      descripcion: ' ',
    },
  ]
}
