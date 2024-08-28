import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css',
  standalone:true,
  imports: [CommonModule]
})
export class PopupComponent {

  @Input() isVisible: boolean = false; // Control visibility
  @Output() close = new EventEmitter<void>(); // Event to close the popup

  onClose(): void {
    this.close.emit(); // Emit close event
  }

}
