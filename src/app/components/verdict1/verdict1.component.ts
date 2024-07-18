import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IVerdict1ListData } from '../../assets/verdict1Data';

@Component({
  selector: 'app-verdict1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verdict1.component.html',
  styleUrl: './verdict1.component.css',
})
export class Verdict1Component {
  @Input() verdictLists!: IVerdict1ListData[]; //props
  @Input() verdictListHeader!: string; //props
  @Input() imgageUrl!: string; //props



  ver1: string = '/rtrr_image.png';

  data: any;
  IMG_URL: any;
}
