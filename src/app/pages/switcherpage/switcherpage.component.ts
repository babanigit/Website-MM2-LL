import { Component } from '@angular/core';
import { sectionDataSwitcher } from '../../assets/sectionData';
import {
  verdict1SwitcherListData,
} from '../../assets/verdict1Data';
import { ReportResponse } from '../../assets/getRespone';

@Component({
  selector: 'app-switcherpage',
  templateUrl: './switcherpage.component.html',
  styleUrl: './switcherpage.component.css',
})
export class SwitcherpageComponent {
  sectionDataSwitcher: any[] = [];
  verdict1SwitcherListData: any[] = [];
  ReportResponse: any[] = []; //will change this with new json data

  constructor() {
    this.sectionDataSwitcher = sectionDataSwitcher;
    this.verdict1SwitcherListData = verdict1SwitcherListData;
    this.ReportResponse = ReportResponse;
  }

  inputData: string = '';
  loadingState: boolean = true;
  ReportBoxState: boolean = false;

  //get input data
  recievedDataEvent(e: string) {
    this.inputData = e;
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
