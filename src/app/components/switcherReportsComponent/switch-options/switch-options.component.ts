import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISwitcherResponse2 } from '../../../assets/switcherGetRespone2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switch-options',
  templateUrl: './switch-options.component.html',
  styleUrl: './switch-options.component.css',
  standalone:true,
  imports: [
    CommonModule
  ]
})
export class SwitchOptionsComponent {
  @Output() myEvent_CloseBox = new EventEmitter<boolean>();

  @Input() reportData!: ISwitcherResponse2 | undefined //props

  onClose() {
    this.myEvent_CloseBox.emit(true);
  }

  getSelectedValue() {

  }

}
