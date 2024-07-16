import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-verdict3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verdict3.component.html',
  styleUrl: './verdict3.component.css',
})
export class Verdict3Component {
  getStarted_nl() {
    throw new Error('Method not implemented.');
  }
  IMG_URL: string = 'https://i.marketsmojo.com/';
  home_button_html: any;
  data: any;
  block_clmm_content: any;
}
