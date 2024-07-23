import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISwitcherResponse2 } from '../../../assets/switcherGetRespone2';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-switch-options',
  templateUrl: './switch-options.component.html',
  styleUrl: './switch-options.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class SwitchOptionsComponent {
  @Output() myEvent_CloseBox = new EventEmitter<boolean>();
  @Output() myEvent2_ChoiceValue = new EventEmitter<string>();


  @Input() reportData!: ISwitcherResponse2 | undefined; //props

  selectedValue: string = ''; // Variable to hold selected radio button value


  onClose() {
    this.myEvent_CloseBox.emit(true);
    this.myEvent2_ChoiceValue.emit(undefined);
  }

  getSelectedValue(value: string) {
    console.log(value);
    this.myEvent2_ChoiceValue.emit(value);
  }
}
