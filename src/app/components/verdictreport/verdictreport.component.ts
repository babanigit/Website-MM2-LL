import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IGetVerdictReportsData } from '../../models/interfaces';

@Component({
  selector: 'app-verdictreport',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './verdictreport.component.html',
  styleUrl: './verdictreport.component.css',
})
export class VerdictreportComponent {

  @Output() myEvent_CloseBox = new EventEmitter<boolean>();

  @Input() reportData!: IGetVerdictReportsData; //props

  onClose() {
    this.myEvent_CloseBox.emit(true);
  }
}
