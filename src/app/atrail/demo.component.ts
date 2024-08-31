import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  inject,
  signal,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import Swiper, { Navigation, Pagination, Scrollbar } from 'swiper';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    // SwiperModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // To prevent error when using Angular Material's components in a custom element
})
export class DemoComponent {
  slides = [
    { title: 'Section 1', content: 'Content for section 1' },
    { title: 'Section 2', content: 'Content for section 2' },
    { title: 'Section 3', content: 'Content for section 3' },
    { title: 'Section 4', content: 'Content for section 4' },
    { title: 'Section 5', content: 'Content for section 5' },
  ];

  ngAfterViewInit() {
    Swiper.use([Navigation, Pagination, Scrollbar]);

    new Swiper('.swiper-container', {
      slidesPerView: 3, // One slide per view
      spaceBetween: 0, // No space between slides
      autoplay: {
        delay: 3000, // Delay in ms
        disableOnInteraction: true, // Continue autoplay after user interactions
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      // Optional: Add more configuration based on your needs
    });
  }
}
