import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-verdict1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verdict1.component.html',
  styleUrl: './verdict1.component.css',
})
export class Verdict1Component {
  ver1: string = '/rtrr_image.png';

  data: any;
  IMG_URL: any;
}
