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
  @Input() reportData!: ISwitcherResponse2; //props

  // events
  @Output() myEvent1_CloseBox = new EventEmitter<boolean>();
  @Output() myEvent2_SendReportDataEvent = new EventEmitter<ISwitcherResponse2>();

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
