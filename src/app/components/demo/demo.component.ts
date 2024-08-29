import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  inject,
  signal,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
// import {SwiperModule} from 'swiper/angular';



@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    // SwiperModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] // To prevent error when using Angular Material's components in a custom element
})
export class DemoComponent {

  // Method to generate a random hex color
  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

}
