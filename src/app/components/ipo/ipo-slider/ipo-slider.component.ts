import { Component } from '@angular/core';

@Component({
  selector: 'app-ipo-slider',
  templateUrl: './ipo-slider.component.html',
  styleUrls: ['./ipo-slider.component.css'],
  standalone: true
})
export class IpoSliderComponent {
  IPOData = {
    heros: [
      // Your hero data here
    ]
  };

  swiperConfig = {
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: { clickable: true },
    navigation: true
  };
  
}
