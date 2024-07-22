import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ISwitcherResponse2 } from '../../../assets/switcherGetRespone2';
import { CommonModule } from '@angular/common';
import { emit } from 'process';
import { FilterSwitcherReportPipe } from '../../../pipes/filter-switcher-report.pipe';


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

  @Output() myEvent_CloseBox = new EventEmitter<boolean>();

  @Input() reportData!: ISwitcherResponse2; //props

  @Output() reportDataEvent = new EventEmitter<ISwitcherResponse2>();

  ngOnInit() {
    // Emit reportData if it's defined
    if (this.reportData) {
      console.log("the switcher report is: ",this.reportData)
      this.reportDataEvent.emit(this.reportData);
    }
  }

  onClose() {
    this.myEvent_CloseBox.emit(true);
  }

}
