import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ISwitcherReportsAndOptions } from '../../../models/switcherReportsAndOption';


@Component({
  selector: 'app-switcher-report',
  templateUrl: './switcher-report.component.html',
  styleUrl: './switcher-report.component.css',
  standalone:true,
  imports: [
    CommonModule,
]
})
export class SwitcherReportComponent implements OnInit  {
  @Input() reportData!: ISwitcherReportsAndOptions; //props

  // events
  @Output() myEvent1_CloseBox = new EventEmitter<boolean>();
  @Output() myEvent2_SendReportDataEvent = new EventEmitter<ISwitcherReportsAndOptions>();

  ngOnInit() {
    // Emit reportData if it's defined
    if (this.reportData) {
      console.log("the switcher report is: ",this.reportData)
      this.myEvent2_SendReportDataEvent.emit(this.reportData);
      
    }
  }

  onClose() {
    this.myEvent1_CloseBox.emit(true);
  }

}
