import {
  AfterViewChecked,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterOtherSwitchersPipe } from '../../../pipes/filter-other-switchers.pipe';

import { ISwitcherReportsAndOptions } from '../../../models/switcherReportsAndOption';
import { JsonDataService } from '../../../services/json-data.service';
import { Fun1Pipe } from '../../../pipes/fun1.pipe';
import { Fun2Pipe } from '../../../pipes/fun2.pipe';
import { IOtherChoiceResponse } from '../../../models/otherChoice';
import { otherchoices } from '../../../assets/otherChoices';
import { ISwitcherResult } from '../../../models/switcherResult';

@Component({
  selector: 'app-switch-other-choices',
  templateUrl: './switch-other-choices.component.html',
  styleUrl: './switch-other-choices.component.css',
  standalone: true,
  imports: [CommonModule, FilterOtherSwitchersPipe, Fun1Pipe, Fun2Pipe],
})
export class SwitchOtherChoicesComponent implements OnInit, AfterViewChecked {
 
  @Input() ID_CHOICE_VALUE!: string | undefined;
  @Input() ID_INPUT_STRING!: string | undefined;

  @Input() reportData!: ISwitcherResult;

  switcherReportsAndOptions: ISwitcherReportsAndOptions[] = [];
  id: number | undefined;

  otherchoices: IOtherChoiceResponse[] = [];

  constructor(private cdr: ChangeDetectorRef, private serv: JsonDataService) {
    this.otherchoices = otherchoices;
  }

  ngOnInit(): void {
    this.fetchGetSwitcherReportandOptions();
  }

  ngAfterViewChecked(): void {

  }

  fetchGetSwitcherReportandOptions() {
    this.serv
      .getSwitcherReportandOptionsData2()
      .subscribe((res: ISwitcherReportsAndOptions[]) => {
        this.switcherReportsAndOptions = res;
      });
  }

}
