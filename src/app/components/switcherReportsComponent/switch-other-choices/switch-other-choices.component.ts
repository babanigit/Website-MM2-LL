import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterOtherSwitchersPipe } from '../../../pipes/filter-other-switchers.pipe';

import { IOption } from '../../../models/interfaces';
import { ISwitcherReportsAndOptions } from '../../../models/switcherReportsAndOption';
import { JsonDataService } from '../../../services/json-data.service';

@Component({
  selector: 'app-switch-other-choices',
  templateUrl: './switch-other-choices.component.html',
  styleUrl: './switch-other-choices.component.css',
  standalone: true,
  imports: [CommonModule, FilterOtherSwitchersPipe],
})
export class SwitchOtherChoicesComponent implements OnInit {
  // @Input() reportData!: ISwitcherReportsAndOptions | undefined | any; //props
  // @Input() itemdata!: any[];

  @Input() ID_CHOICE_VALUE!: string | undefined;

  otherSwitcherData: ISwitcherReportsAndOptions[] = [];

  constructor(private cdr: ChangeDetectorRef, private serv: JsonDataService) {}

  ngOnInit(): void {
    this.fetchGetSwitcherReportandOptions();
    console.log('the otherSwitcherData is :', this.otherSwitcherData);
    // this.cdr.detectChanges();
  }

  fetchGetSwitcherReportandOptions() {
    this.serv
      .getSwitcherReportandOptionsData2()
      .subscribe((res: ISwitcherReportsAndOptions[]) => {
        this.otherSwitcherData = res;
      });
  }

  fun1Data: ISwitcherReportsAndOptions[] = [];
  // returning the one array

  fun1(ID_Choice: string): any {
    
    let items = this.otherSwitcherData;

    if (!items) return [];
    if (!ID_Choice) return items;

    ID_Choice = ID_Choice.toString();

    console.log('The fun1 items are: ', items);
    console.log('The fun1 search text is: ', ID_Choice, typeof ID_Choice);

    // Filter items based on the given ID_Choice
    let getReport: ISwitcherReportsAndOptions[] = items.filter(
      (item: ISwitcherReportsAndOptions) => {
        // Check if `ques` and `list` exist in item.data
        const optList = item.data.ques?.list[0]?.opt;
        if (optList) {
          // Iterate through options to find if any `valsid` matches the `ID_Choice`
          return optList.some((opt) => {
            const val = opt.valsid;
            if (val) {
              // console.log('The valsid is: ', val);
              return val.toString().includes(ID_Choice);
            }
            return false;
          });
        }
        return false;
      }
    );

    console.log(' the return is : ', getReport);
    this.fun1Data = getReport; //storing in variable
    return getReport;
    
  }

  fun2(
    arr: ISwitcherReportsAndOptions,
    choice_id: string
  ): ISwitcherReportsAndOptions | any {
    // Define the valsid to look for
    const targetValSid = choice_id;
    console.log('arr is :', arr);

    const opts = arr.data.ques!.list[0].opt; //get opt
    console.log('the opts are : ', opts);
    let otherChoices = null;

    for (const opt of opts) {
      if (opt.valsid.toString() === choice_id.toString()) {
        otherChoices = opt.other_choice;
        break;
      }
    }
  
    console.log('final other choices is : ', otherChoices);
    return otherChoices;
  }

  getOtherChoiceShortName(sid: string | undefined): string[] | undefined {
    // // Check if sid is provided
    // if (!sid) {
    //   console.log('Undefined or invalid sid');
    //   return [];
    // }

    // console.log('Provided sid is:', sid);

    // // Retrieve options
    // const options = this.otherSwitcherData?.data?.ques?.list[0]?.opt || [];
    // console.log('Options retrieved:', options);

    // // Create an array to store short_name values for the given sid
    // let matchingShortNames: string[] = [];

    // // Iterate through options and collect matching short_names
    // options.forEach((option: IOption) => {
    //   console.log('Processing option:', option);

    //   if (option.other_choice) {
    //     console.log('Found other_choice:', option.other_choice);

    //     Object.keys(option.other_choice).forEach((key) => {
    //       console.log('Checking key:', key);
    //       const choice = option.other_choice[key];
    //       console.log('Choice:', choice);

    //       // Convert sid to string for comparison if needed
    //       const choiceSid = choice.sid.toString();
    //       if (choiceSid === sid) {
    //         // Add the short_name to the array if the sid matches
    //         matchingShortNames.push(choice.short_name);
    //         console.log('Found matching short_name:', choice.short_name);
    //       } else {
    //         console.log('No match for sid:', choiceSid);
    //       }
    //     });
    //   } else {
    //     console.log('No other_choice found for option:', option);
    //   }
    // });

    // console.log('Matching short names are:', matchingShortNames);

    // // Return the array of short_names or undefined if none found
    // return matchingShortNames.length > 0 ? matchingShortNames : undefined;

    return undefined;
  }
}
