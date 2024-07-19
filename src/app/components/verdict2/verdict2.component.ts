import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-verdict2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verdict2.component.html',
  styleUrl: './verdict2.component.css'
})
export class Verdict2Component {
  @Input() headingTitle!: string; //props
  @Input() headingDesc!: string; //props
  @Input() imgSrc!: string; //props

}
