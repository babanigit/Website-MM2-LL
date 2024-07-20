import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ISwitcherResponse2 } from '../../../assets/switcherGetRespone2';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-switcher-report',
  templateUrl: './switcher-report.component.html',
  styleUrl: './switcher-report.component.css',
  standalone:true,
  imports:[
    CommonModule
  ]
})
export class SwitcherReportComponent {

  @Output() myEvent_CloseBox = new EventEmitter<boolean>();

  @Input() reportData!: ISwitcherResponse2; //props


  onClose() {
    this.myEvent_CloseBox.emit(true);
  }

}
