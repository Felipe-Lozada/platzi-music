/* eslint-disable max-len */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  slideOpts = {
    initialslide: 0,
    slidesPerView: 1,
    centeredSlides: true,
    speed: 600
  };

  slides = [
    {
      title: 'Escucha tu musica.',
      subtitle: 'EN CUALQUIER LUGAR!',
      description: 'Los mejores albumes, las mejores canciones. Escucha y comparte en cualquier momento, a todas horas.',
      icon: 'play'
    },
    {
      title: 'Disfruta de nuerstro reproductor',
      subtitle: 'DE VIDEOS INCREIBLES',
      description: 'Entra al modo video de nuestro reproductor y obten acceso a clips, docmebtales y making offs increlicles de tus artistas favoritos 😎.',
      icon: 'videocam'
    },
    {
      title: 'Accede al exclusivo',
      subtitle: 'MODO DEPORTE',
      description: 'Crea una playlist basada en tu actividad fisica. Ten reportes y acceso a lo que necesites, integrado al gps',
      icon: 'bicycle'
    },
    {
      title: 'Se el alma de la fiest',
      subtitle: 'DONDE VAYAS, MUSICA PARA PERREAR HASTA EL PISO',
      description: ' La mejor playlist para la fiesta, las canciones m&aacute;s movidas, las canciones del momento. Todos los g&eacute;neros para que tu fiesta sea la mejor. 🎉🎉🎉',
      icon: 'musical-notes'
    },
    {
      title: 'Trends',
      subtitle: 'TIKTOK, REELS',
      description: 'Saca las coreo de tiktok y reels en la fiesta. 🎉🎉🎉',
      icon: 'musical-note'
    },
    {
      title: 'Concentrate',
      subtitle: 'MUSICA ÁRA TRABAJAR Y/O ESTUDIAR',
      description: 'Tenemos la playslit con musica para concentrarse, paa momentos en que necesitas tranquilidad y enfocarte. Valido para el HomeOffice y las clases en linea. 👓 🧑‍💼 💻',
      icon: 'headset'
    }
  ];

  constructor(
    private router: Router,
    private storage: Storage
    ) {}

  ngOnInit() {
  }

  onCloseSlides() {
    this.storage.create();
    this.storage.set('isIntroShowed', true);
    this.router.navigateByUrl('/home');
    console.log('x');
  }

}
