import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISwitcherResult } from '../../../models/switcherResult';

@Component({
  selector: 'app-switch-result',
  templateUrl: './switch-result.component.html',
  styleUrl: './switch-result.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class SwitchResultComponent {
  @Output() myEvent_resultState = new EventEmitter<boolean>();
  @Output() myEvent4_LoadingState = new EventEmitter<boolean>(); //for loadingState

  @Input() reportData!: ISwitcherResult; //props

  // onclose clicked
  onClose() {
    this.myEvent_resultState.emit(true); //emitting event to parent component to close the result box
  }
}
