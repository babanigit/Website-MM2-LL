import { Component, OnInit } from '@angular/core';
import { verdictReportsData } from '../../assets/verdictReportsData';
import { sectionDataVerdict } from '../../assets/sectionData';
import { verdict1ListData } from '../../assets/verdict1Data';
import { Subscription } from 'rxjs';
import { JsonDataService } from '../../services/json-data.service';
import { IGetVerdictReportsData } from '../../models/interfaces';

@Component({
  selector: 'app-verdictpage',
  templateUrl: './verdictpage.component.html',
  styleUrl: './verdictpage.component.css',
})
export class VerdictpageComponent implements OnInit {
  verdictReportsData: IGetVerdictReportsData[] = [];

  sectionDataVerdict: any[] = [];
  verdict1ListData: any[] = [];

  SNAME_INPUT_STRING: string = '';
  loadingState: boolean = true;
  ReportBoxState: boolean = false;

  private loadingSubscription: Subscription | undefined;
  LOADING_STATE: boolean = true;

  constructor(private serv: JsonDataService) {
    // this.verdictReportsData = verdictReportsData; //verdict data

    this.sectionDataVerdict = sectionDataVerdict;
    this.verdict1ListData = verdict1ListData;
  }

  ngOnInit(): void {
    // init loading fun
    this.loadingSubscription = this.serv.getLoadingState().subscribe((data) => {
      this.LOADING_STATE = data;
    });
  }

  fetchGetVerdictReport() {
    this.serv.getVerdictReport().subscribe((res: IGetVerdictReportsData[]) => {
      console.log('the res is : ', res);
      this.verdictReportsData = res;
    });
  }

  //get input data
  recievedDataEvent(e: string) {
    this.fetchGetVerdictReport();
    this.SNAME_INPUT_STRING = e;
  }

  //manipulate reportBox State
  recievedReportStateEvent(e: boolean) {
    this.ReportBoxState = e;
  }

  // //loadingState
  // recievedLoadingStateEvent(e: boolean) {
  //   this.loadingState = e;
  // }
}
