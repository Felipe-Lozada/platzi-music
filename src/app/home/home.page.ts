import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  slideOpts = {
    initialSlide: 0,
    slidePerView: 1,
    centeredSlides: true,
    speed: 400
  };
  constructor() {}

}
