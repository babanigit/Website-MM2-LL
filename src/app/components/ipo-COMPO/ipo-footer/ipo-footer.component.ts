import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ipo-footer',
  templateUrl: './ipo-footer.component.html',
  styleUrl: './ipo-footer.component.css',
  standalone: true,
  imports: [CommonModule],
  encapsulation: ViewEncapsulation.None // Disable encapsulation
})
export class IpoFooterComponent implements OnInit {
  images = [
    'https://i.marketsmojo.com/logo/axis-securities-logo.png',
    'https://i.marketsmojo.com/logo/smc-logo.png',
    'https://i.marketsmojo.com/logo/gj-logo.png',
    'https://i.marketsmojo.com/logo/angel-logo-v1.png',
    'https://i.marketsmojo.com/logo/integrated-logo-v1.png'
  ];

  constructor() {}

  ngOnInit(): void {}
}
