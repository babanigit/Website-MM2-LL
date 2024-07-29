import { ChangeDetectorRef, Component } from '@angular/core';
import { sectionDataSwitcher } from '../../assets/sectionData';
import { verdict1SwitcherListData } from '../../assets/verdict1Data';

import { Subscription } from 'rxjs';
import { JsonDataService } from '../../services/json-data.service';
import { ISwitcherReportsAndOptions } from '../../models/switcherReportsAndOption';
import { ISwitcherResult } from '../../models/switcherResult';

@Component({
  selector: 'app-switcherpage',
  templateUrl: './switcherpage.component.html',
  styleUrl: './switcherpage.component.css',
})
export class SwitcherpageComponent {
  sectionDataSwitcher: any[] = [];
  verdict1SwitcherListData: any[] = [];

  switcherReportsAndOptions: ISwitcherReportsAndOptions[] = [];
  switcherResult: ISwitcherResult[] = [];

  SNAME_INPUT_STRING: string = '';
  ID_INPUT_STRING: string = '';

  // LOADING_STATE: boolean = true;

  switherReportData: ISwitcherReportsAndOptions | undefined;
  switherReportData_State: boolean = false;

  ID_CHOICE_VALUE: string | undefined;
  CHOICE_VALUE_STATE: Boolean = false;

  REPORTB0X_STATE: boolean = true;
  SWITCHER_RESULT_STATE: boolean = true;

  private loadingSubscription: Subscription | undefined;
  LOADING_STATE: boolean = true;

  // private loadingSubResult: Subscription | undefined;
  // LOADING_STATE2: boolean = true;

  constructor(private cdr: ChangeDetectorRef, private serv: JsonDataService) {
    this.sectionDataSwitcher = sectionDataSwitcher;
    this.verdict1SwitcherListData = verdict1SwitcherListData;

    // this.switcherReportsAndOptions = switcherReportsAndOptions;
    // this.switcherResult = SwitcherReportData;
  }

  ngOnInit(): void {
    // init loading fun
    this.loadingSubscription = this.serv.getLoadingState().subscribe((data) => {
      this.LOADING_STATE = data;
    });

    // this.loadingSubResult = this.serv
    //   .getLoadingState()
    //   .subscribe((data) => {
    //     this.LOADING_STATE = data;
    //   });
  }

  fetchGetSwitcherReportandOptions() {
    this.serv
      .getSwitcherReportandOptionsData()
      .subscribe((res: ISwitcherReportsAndOptions[]) => {
        this.switcherReportsAndOptions = res;
      });
  }

  fetchGetSwitcherResult() {
    this.serv.getSwitcherResult().subscribe((res: ISwitcherResult[]) => {
      this.switcherResult = res;
    });
  }

  //get input data
  State_getInputStr(e: string) {
    this.fetchGetSwitcherReportandOptions();

    this.SNAME_INPUT_STRING = e;
    this.cdr.detectChanges();
  }
  // get input id
  State_getInputIdStr(e: string) {
    this.ID_INPUT_STRING = e;
    console.log('the input ID String is:', this.ID_INPUT_STRING);
  }
  //manipulate reportBox State
  State_getReportBol(e: boolean) {
    this.REPORTB0X_STATE = e;

    this.CHOICE_VALUE_STATE = false;
    this.ID_CHOICE_VALUE = undefined;

    this.SWITCHER_RESULT_STATE = true;
  }

  // //get loading state
  // State_getLoadingBol(e: boolean) {
  //   this.LOADING_STATE = e;
  // }

  // getchoicevalue id
  State_getChoiceBol(e: string | undefined) {
    this.fetchGetSwitcherResult();

    this.ID_CHOICE_VALUE = e;
    console.log('the choice value ID is : ', e);

    this.CHOICE_VALUE_STATE = true;
    this.SWITCHER_RESULT_STATE = false;

    this.cdr.detectChanges();
  }

  State_getReportArr(e: ISwitcherReportsAndOptions) {
    this.switherReportData = e;

    // if undefind
    if (this.switherReportData!.data!.ques) {
      this.switherReportData_State = true;
    } else {
      this.switherReportData_State = false;
    }

    this.cdr.detectChanges();
  }

  // state of result
  State_getResultBol(e: boolean) {
    this.SWITCHER_RESULT_STATE = e;
  }
}
