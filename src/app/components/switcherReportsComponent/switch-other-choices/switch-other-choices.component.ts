import {
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterOtherSwitchersPipe } from '../../../pipes/filter-other-switchers.pipe';

import { IOption } from '../../../models/interfaces';
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
  // @Input() reportData!: ISwitcherReportsAndOptions | undefined | any; //props
  // @Input() itemdata!: any[];

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
    // console.log('the switcherReportsAndOptions is :', this.switcherReportsAndOptions);
    // this.cdr.detectChanges();
    // if (this.switcherReportsAndOptions.data.verdict) {
    //   this.id= this.switcherReportsAndOptions.data.verdict.stock_details.sid;
    // }

    // console.log("the id is : ", this.id)
  }

  ngAfterViewChecked(): void {
    // console.log('the switcherReportsAndOptions is :', this.switcherReportsAndOptions);
    // if (this.switcherReportsAndOptions.data.verdict) {
    //   this.id= this.switcherReportsAndOptions.data.verdict.stock_details.sid;
    // }
    // console.log("the id is : ", this.id)
  }

  fetchGetSwitcherReportandOptions() {
    this.serv
      .getSwitcherReportandOptionsData2()
      .subscribe((res: ISwitcherReportsAndOptions[]) => {
        this.switcherReportsAndOptions = res;
      });
  }

  // fun1Data: ISwitcherReportsAndOptions[] = [];
  // // returning the one array

  // fun1(ID_Choice: string): any {
  //   let items = this.switcherReportsAndOptions;

  //   if (!items) return [];
  //   if (!ID_Choice) return items;

  //   ID_Choice = ID_Choice.toString();

  //   console.log('The fun1 items are: ', items);
  //   console.log('The fun1 search text is: ', ID_Choice, typeof ID_Choice);

  //   // Filter items based on the given ID_Choice
  //   let getReport: ISwitcherReportsAndOptions[] = items.filter(
  //     (item: ISwitcherReportsAndOptions) => {
  //       // Check if `ques` and `list` exist in item.data
  //       const optList = item.data.ques?.list[0]?.opt;
  //       if (optList) {
  //         // Iterate through options to find if any `valsid` matches the `ID_Choice`
  //         return optList.some((opt) => {
  //           const val = opt.valsid;
  //           if (val) {
  //             // console.log('The valsid is: ', val);
  //             return val.toString().includes(ID_Choice);
  //           }
  //           return false;
  //         });
  //       }
  //       return false;
  //     }
  //   );

  //   console.log(' the return is : ', getReport);
  //   this.fun1Data = getReport; //storing in variable
  //   return getReport;
  // }

  // fun2(
  //   arr: ISwitcherReportsAndOptions,
  //   choice_id: string
  // ): ISwitcherReportsAndOptions | any {
  //   // Define the valsid to look for
  //   const targetValSid = choice_id;
  //   console.log('arr is :', arr);

  //   const opts = arr.data.ques!.list[0].opt; //get opt
  //   console.log('the opts are : ', opts);
  //   let otherChoices = null;

  //   for (const opt of opts) {
  //     if (opt.valsid.toString() === choice_id.toString()) {
  //       otherChoices = opt.other_choice;
  //       break;
  //     }
  //   }

  //   console.log('final other choices is : ', otherChoices);
  //   return otherChoices;
  // }

  // getOtherChoiceShortName(sid: string | undefined): string[] | undefined {
  //   // // Check if sid is provided
  //   // if (!sid) {
  //   //   console.log('Undefined or invalid sid');
  //   //   return [];
  //   // }

  //   // console.log('Provided sid is:', sid);

  //   // // Retrieve options
  //   // const options = this.switcherReportsAndOptions?.data?.ques?.list[0]?.opt || [];
  //   // console.log('Options retrieved:', options);

  //   // // Create an array to store short_name values for the given sid
  //   // let matchingShortNames: string[] = [];

  //   // // Iterate through options and collect matching short_names
  //   // options.forEach((option: IOption) => {
  //   //   console.log('Processing option:', option);

  //   //   if (option.other_choice) {
  //   //     console.log('Found other_choice:', option.other_choice);

  //   //     Object.keys(option.other_choice).forEach((key) => {
  //   //       console.log('Checking key:', key);
  //   //       const choice = option.other_choice[key];
  //   //       console.log('Choice:', choice);

  //   //       // Convert sid to string for comparison if needed
  //   //       const choiceSid = choice.sid.toString();
  //   //       if (choiceSid === sid) {
  //   //         // Add the short_name to the array if the sid matches
  //   //         matchingShortNames.push(choice.short_name);
  //   //         console.log('Found matching short_name:', choice.short_name);
  //   //       } else {
  //   //         console.log('No match for sid:', choiceSid);
  //   //       }
  //   //     });
  //   //   } else {
  //   //     console.log('No other_choice found for option:', option);
  //   //   }
  //   // });

  //   // console.log('Matching short names are:', matchingShortNames);

  //   // // Return the array of short_names or undefined if none found
  //   // return matchingShortNames.length > 0 ? matchingShortNames : undefined;

  //   return undefined;
  // }
}
