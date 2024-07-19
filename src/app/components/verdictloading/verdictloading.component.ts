import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-verdictloading',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './verdictloading.component.html',
  styleUrl: './verdictloading.component.css'
})
export class VerdictloadingComponent {
  @Input() barColor!: string; //props
  @Input() text1!: string; //props
  @Input() text2!: string; //props




}
