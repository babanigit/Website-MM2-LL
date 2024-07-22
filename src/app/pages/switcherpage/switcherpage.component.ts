import { Component } from '@angular/core';
import { sectionDataSwitcher } from '../../assets/sectionData';
import { verdict1SwitcherListData } from '../../assets/verdict1Data';
import { switcherGetRespone } from '../../assets/switcherGetRespone';
import { ISwitcherResponse2, switcherGetRespone2 } from '../../assets/switcherGetRespone2';

@Component({
  selector: 'app-switcherpage',
  templateUrl: './switcherpage.component.html',
  styleUrl: './switcherpage.component.css',
})
export class SwitcherpageComponent {
  sectionDataSwitcher: any[] = [];
  verdict1SwitcherListData: any[] = [];

  switcherGetRespone: any[] = [];

  constructor() {
    this.sectionDataSwitcher = sectionDataSwitcher;
    this.verdict1SwitcherListData = verdict1SwitcherListData;
    this.switcherGetRespone = switcherGetRespone2;
  }

  inputData: string = '';
  loadingState: boolean = true;
  ReportBoxState: boolean = false;

  reportDataEvent: ISwitcherResponse2 | undefined;

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

  recievedReportDataEvent(e: ISwitcherResponse2) {
    this.reportDataEvent = e;
    console.log('hey from the page');
    console.log(e);
  }
}
