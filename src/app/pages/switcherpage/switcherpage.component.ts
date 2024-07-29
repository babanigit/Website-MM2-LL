import { ChangeDetectorRef, Component } from '@angular/core';
import { sectionDataSwitcher } from '../../assets/sectionData';
import { verdict1SwitcherListData } from '../../assets/verdict1Data';
import {
  ISwitcherResponse2,
  switcherGetRespone2,
} from '../../assets/switcherGetRespone2';
import { SwitcherReportData } from '../../assets/switcherReportsData';

import {
  ISearchData2Switcher,
  searchData2Switcher,
} from '../../assets/searchData2Switcher';
import { Subscription } from 'rxjs';
import { JsonDataService } from '../../services/json-data.service';
import { ISwitcherReportsAndOptions } from '../../models/switcherReportsAndOption';

@Component({
  selector: 'app-switcherpage',
  templateUrl: './switcherpage.component.html',
  styleUrl: './switcherpage.component.css',
})
export class SwitcherpageComponent {
  sectionDataSwitcher: any[] = [];
  verdict1SwitcherListData: any[] = [];

  switcherGetRespone2: ISwitcherReportsAndOptions[] = [];
  SwitcherReportData: any[] = [];

  searchData2Switcher: ISearchData2Switcher[] = [];

  SNAME_INPUT_STRING: string = '';
  ID_INPUT_STRING: string = '';

  // LOADING_STATE: boolean = true;

  switherReportData: ISwitcherResponse2 | undefined;
  switherReportData_State: boolean = false;

  ID_CHOICE_VALUE: string | undefined;
  CHOICE_VALUE_STATE: Boolean = false;

  REPORTB0X_STATE: boolean = true;
  SWITCHER_RESULT_STATE: boolean = true;

  private loadingSubscription: Subscription | undefined;
  LOADING_STATE: boolean = true;

  constructor(private cdr: ChangeDetectorRef, private serv: JsonDataService) {
    this.sectionDataSwitcher = sectionDataSwitcher;
    this.verdict1SwitcherListData = verdict1SwitcherListData;

    // this.switcherGetRespone2 = switcherGetRespone2;
    this.SwitcherReportData = SwitcherReportData;

    this.searchData2Switcher = searchData2Switcher;
  }

  ngOnInit(): void {
    // init loading fun
    this.loadingSubscription = this.serv.getLoadingState().subscribe((data) => {
      this.LOADING_STATE = data;
    });
  }

  fetchGetSwitcherReportandOptions() {
    this.serv
      .getSwitcherReportandOptionsData()
      .subscribe((res: ISwitcherReportsAndOptions[]) => {
        console.log('the res is : ', res);
        this.switcherGetRespone2 = res;
      });
  }

  //get input data
  State_getInputStr(e: string) {
    this.fetchGetSwitcherReportandOptions();

    this.SNAME_INPUT_STRING = e;
    this.cdr.detectChanges();
  }
  State_getInputIdStr(e: string) {
    this.ID_INPUT_STRING = e;
    console.log('the input id stirng is:', this.ID_INPUT_STRING);
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
    this.CHOICE_VALUE_STATE = true;
    this.ID_CHOICE_VALUE = e;
    console.log('the choice value is the id is : ', e);

    this.SWITCHER_RESULT_STATE = false;

    this.cdr.detectChanges();
  }

  State_getReportArr(e: ISwitcherResponse2) {
    this.switherReportData = e;

    // if undefind
    if (this.switherReportData!.data!.ques) {
      this.switherReportData_State = true;
    } else {
      this.switherReportData_State = false;
    }

    console.log('hey from the page');
    console.log(e);

    this.cdr.detectChanges();
  }

  // state of result
  State_getResultBol(e: boolean) {
    this.SWITCHER_RESULT_STATE = e;
    console.log('hey from the page resultstate is : ', e);
    console.log(e);
  }
}
