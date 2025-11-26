import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-catedraticos-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './catedratico2-component.html',
  styleUrls: ['./catedratico2-component.css'],
})
export class CatedraticosComponent {
  lista = [
    {
      nombre: 'Docente de Licenciatura en Ciencias de la Comunicación',
      materia: '',
      foto: 'https://scontent.fsal2-2.fna.fbcdn.net/v/t39.30808-6/546617180_1235552955278414_3022514622687111604_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF7iRPIfSf55cSMNeCG7xTueBBW4NV1HhR4EFbg1XUeFLaMJ3Im9xoL0fY1lbJ8ufW6TQxNDJAVM4KipjEQEZpI&_nc_ohc=dOUua8_3cTwQ7kNvwFUwVZO&_nc_oc=Adn95CgZfjzDUC1SfNUnuYj821Vyif3WBxJT_7vZ8RyY_UOc9mbVhV2ZG7EEq5e7PR_oVGoHsytHRydKqi4cZfQa&_nc_zt=23&_nc_ht=scontent.fsal2-2.fna&_nc_gid=IPt-9QjA_9dGBQD7JSCdVg&oh=00_AfiWou4qEXeaE1e8QZ2J838sXzTTWg6Upxpdbj3ZOCzIug&oe=692C37BA',
      descripcion: ' '
    },
  ]
}