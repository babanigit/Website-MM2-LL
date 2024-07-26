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
  // events
  @Output() myEvent1_CloseBox = new EventEmitter<boolean>();
  @Output() myEvent2_ChoiceValue = new EventEmitter<string>();
  @Output() myEvent3_afterChoiceSubmitState = new EventEmitter<boolean>();

  @Output() myEvent4_LoadingState = new EventEmitter<boolean>(); //for loadingState


  @Input() reportData!: ISwitcherResponse2 | undefined; //props

  selectedValue: string = ''; // Variable to hold selected radio button value


  onClose() {
    this.myEvent1_CloseBox.emit(true);
    this.myEvent2_ChoiceValue.emit(undefined);
  }

  // on switcher clicked // we sending string value
  getSubmitValue(value: string) {
    this.myEvent4_LoadingState.emit(false); //on click unhidden loading

    setTimeout(() => {
      this.myEvent4_LoadingState.emit(true); //hide loading true

      this.myEvent2_ChoiceValue.emit(value);

    }, 800);



    this.myEvent1_CloseBox.emit(true); //close box true

    this.myEvent3_afterChoiceSubmitState.emit(false); //unhide result
  }
}
