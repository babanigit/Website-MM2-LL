import { Component } from '@angular/core';
import { ReportResponse } from '../../assets/getRespone';

@Component({
  selector: 'app-verdictpage',
  templateUrl: './verdictpage.component.html',
  styleUrl: './verdictpage.component.css',
})
export class VerdictpageComponent {
  loadingState: boolean = true;

  ReportResponse = ReportResponse;
  inputData: string = '';
  boxState = false;

  //get input data
  recievedDataEvent(e: string) {
    this.inputData = e;
  }

  //manipulate reportBox State
  recievedReportStateEvent(e: boolean) {
    this.boxState = e;
  }

  //loadingState
  recievedLoadingStateEvent(e: boolean) {
    this.loadingState = e;
  }
}
