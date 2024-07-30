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

  data: ISwitcherReportsAndOptions[] = [];

  constructor(private cdr: ChangeDetectorRef, private serv: JsonDataService) {}

  ngOnInit(): void {
    this.fetchGetSwitcherReportandOptions();

    console.log('the data is :', this.data);
    // this.cdr.detectChanges();
  }

  fetchGetSwitcherReportandOptions() {
    this.serv
      .getSwitcherReportandOptionsData2()
      .subscribe((res: ISwitcherReportsAndOptions[]) => {
        this.data = res;
      });
    this.cdr.detectChanges();
  }

  // getOtherChoiceShortName(sid: string | undefined): string[] | undefined {
  //   // Check if sid is provided
  //   if (!sid) {
  //     console.log('Undefined or invalid sid');
  //     return [];
  //   }

  //   console.log('Provided sid is:', sid);

  //   // Retrieve options
  //   const options = this.reportData?.data?.ques?.list[0]?.opt || [];
  //   console.log('Options retrieved:', options);

  //   // Create an array to store short_name values for the given sid
  //   let matchingShortNames: string[] = [];

  //   // Iterate through options and collect matching short_names
  //   options.forEach((option: IOption) => {
  //     console.log('Processing option:', option);

  //     if (option.other_choice) {
  //       console.log('Found other_choice:', option.other_choice);

  //       Object.keys(option.other_choice).forEach((key) => {
  //         console.log('Checking key:', key);
  //         const choice = option.other_choice[key];
  //         console.log('Choice:', choice);

  //         // Convert sid to string for comparison if needed
  //         const choiceSid = choice.sid.toString();
  //         if (choiceSid === sid) {
  //           // Add the short_name to the array if the sid matches
  //           matchingShortNames.push(choice.short_name);
  //           console.log('Found matching short_name:', choice.short_name);
  //         } else {
  //           console.log('No match for sid:', choiceSid);
  //         }
  //       });
  //     } else {
  //       console.log('No other_choice found for option:', option);
  //     }
  //   });

  //   console.log('Matching short names are:', matchingShortNames);

  //   // Return the array of short_names or undefined if none found
  //   return matchingShortNames.length > 0 ? matchingShortNames : undefined;
  // }
  
}
