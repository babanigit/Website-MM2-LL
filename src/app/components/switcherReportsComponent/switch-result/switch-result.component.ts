import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISwitcherResponse2 } from '../../../assets/switcherGetRespone2';

@Component({
  selector: 'app-switch-result',
  templateUrl: './switch-result.component.html',
  styleUrl: './switch-result.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class SwitchResultComponent {
  @Output() myEvent_resultState = new EventEmitter<boolean>();
  @Input() reportData!: ISwitcherResponse2 | undefined | any; //props

  // onclose clicked
  onClose() {
    this.myEvent_resultState.emit(true); //emitting event to parent component to close the result box
  }
}
