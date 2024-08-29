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
export class DemoComponent implements AfterViewInit {

  ngAfterViewInit() {

  }
}
