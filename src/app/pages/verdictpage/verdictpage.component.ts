import { Component } from '@angular/core';
import { ReportResponse } from '../../assets/getRespone';

@Component({
  selector: 'app-verdictpage',
  templateUrl: './verdictpage.component.html',
  styleUrl: './verdictpage.component.css'
})
export class VerdictpageComponent {
  loadingState:boolean=true

  ReportResponse = ReportResponse;
  inputData: string = '';
  boxState = false;

  recievedDataEvent(e: string) {
    this.inputData = e;
  }

  recievedDataEvent2(e: boolean) {
    this.boxState = e;
  }

  recievedStateEvent(e: boolean) {
    this.boxState = e;
  }
  recievedLoadingStateEvent(e:boolean) {
    this.loadingState= e;
  }
}
