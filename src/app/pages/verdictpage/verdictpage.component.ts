import { Component, OnInit } from '@angular/core';
import { verdictReportsData } from '../../assets/verdictReportsData';
import { sectionDataVerdict } from '../../assets/sectionData';
import { verdict1ListData } from '../../assets/verdict1Data';
import { Subscription } from 'rxjs';
import { JsonDataService } from '../../services/json-data.service';

@Component({
  selector: 'app-verdictpage',
  templateUrl: './verdictpage.component.html',
  styleUrl: './verdictpage.component.css',
})
export class VerdictpageComponent implements OnInit {
  sectionDataVerdict: any[] = [];
  verdictReportsData: any[] = [];
  verdict1ListData: any[] = [];


  SNAME_INPUT_STRING: string = '';
  loadingState: boolean = true;
  ReportBoxState: boolean = false;

  LOADING_STATE: boolean = false;
  private loadingSubscription: Subscription | undefined;


  constructor( private serv :JsonDataService ) {
    this.sectionDataVerdict = sectionDataVerdict;
    this.verdictReportsData = verdictReportsData;
    this.verdict1ListData = verdict1ListData;
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.loadingSubscription = this.serv.getLoadingState().subscribe((state) => {
      this.LOADING_STATE = state;
    });

    
  }


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
