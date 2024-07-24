import { Component } from '@angular/core';
import { ReportResponse } from '../../assets/getRespone';
import { sectionDataVerdict } from '../../assets/sectionData';
import { verdict1ListData } from '../../assets/verdict1Data';

@Component({
  selector: 'app-verdictpage',
  templateUrl: './verdictpage.component.html',
  styleUrl: './verdictpage.component.css',
})
export class VerdictpageComponent {
  sectionDataVerdict: any[] = [];
  ReportResponse: any[] = [];
  verdict1ListData: any[] = [];

  constructor() {
    this.sectionDataVerdict = sectionDataVerdict;
    this.ReportResponse = ReportResponse;
    this.verdict1ListData = verdict1ListData;
  }

  SNAME_INPUT_STRING: string = '';
  loadingState: boolean = true;
  ReportBoxState: boolean = false;

  //get input data
  recievedDataEvent(e: string) {
    this.SNAME_INPUT_STRING = e;
  }

  //manipulate reportBox State
  recievedReportStateEvent(e: boolean) {
    this.ReportBoxState = e;
  }

  //loadingState
  recievedLoadingStateEvent(e: boolean) {
    this.loadingState = e;
  }
}
