import { ChangeDetectorRef, Component } from '@angular/core';
import { sectionDataSwitcher } from '../../assets/sectionData';
import { verdict1SwitcherListData } from '../../assets/verdict1Data';
import { switcherGetRespone } from '../../assets/switcherGetRespone';
import {
  ISwitcherResponse2,
  switcherGetRespone2,
} from '../../assets/switcherGetRespone2';
import { swticherResultData } from '../../assets/switcherResultData';

@Component({
  selector: 'app-switcherpage',
  templateUrl: './switcherpage.component.html',
  styleUrl: './switcherpage.component.css',
})
export class SwitcherpageComponent {
  sectionDataSwitcher: any[] = [];
  verdict1SwitcherListData: any[] = [];

  switcherGetRespone: any[] = [];
  swticherResultData: any[] = [];

  constructor(private cdr: ChangeDetectorRef) {
    this.sectionDataSwitcher = sectionDataSwitcher;
    this.verdict1SwitcherListData = verdict1SwitcherListData;
    this.switcherGetRespone = switcherGetRespone2;
    this.swticherResultData = swticherResultData;
  }

  SNAME_INPUT_STRING: string = '';
  LOADING_STATE: boolean = true;

  reportDataEvent: ISwitcherResponse2 | undefined | any;

  CHOICE_VALUE: string | undefined;
  CHOICE_VALUE_STATE: Boolean = false;

  REPORTB0X_STATE: boolean = true;
  SWITCHER_RESULT_STATE: boolean = true;

  //get input data
  State_getInputStr(e: string) {
    this.SNAME_INPUT_STRING = e;
    this.cdr.detectChanges();
  }

  //manipulate reportBox State
  State_getReportBol(e: boolean) {
    this.REPORTB0X_STATE = e;

    this.CHOICE_VALUE_STATE =false
    this.CHOICE_VALUE = undefined;

    this.SWITCHER_RESULT_STATE = true;
  }
  //get loading state
  State_getLoadingBol(e: boolean) {
    this.LOADING_STATE = e;
  }
  // getchoicevalue id
  State_getChoiceBol(e: string | undefined) {

    this.CHOICE_VALUE_STATE =true
    this.CHOICE_VALUE = e;
    console.log('the id is : ', e);

    this.SWITCHER_RESULT_STATE=false

    this.cdr.detectChanges();
  }
  State_getReportArr(e: ISwitcherResponse2) {
    this.reportDataEvent = e;
    console.log('hey from the page');
    console.log(e);
  }

  // state of result
  State_getResultBol(e: boolean) {
    this.SWITCHER_RESULT_STATE = e;
    console.log('hey from the page resultstate is : ', e);
    console.log(e);
  }
}
