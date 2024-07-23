import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-switch-result',
  templateUrl: './switch-result.component.html',
  styleUrl: './switch-result.component.css',
  standalone: true,
  imports: [CommonModule],
})
export class SwitchResultComponent {
  @Output() myEvent_resultState = new EventEmitter<boolean>();

  // onclose clicked
  onClose() {
    this.myEvent_resultState.emit(true); //emitting event to parent component to close the result box
  }
}
