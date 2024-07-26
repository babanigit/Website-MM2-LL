import { Component, Input } from '@angular/core';
import { ISwitcherResponse2 } from '../../../assets/switcherGetRespone2';
import { CommonModule } from '@angular/common';
import { FilterOtherSwitchersPipe } from '../../../pipes/filter-other-switchers.pipe';

@Component({
  selector: 'app-switch-other-choices',
  templateUrl: './switch-other-choices.component.html',
  styleUrl: './switch-other-choices.component.css',
  standalone: true,
  imports: [CommonModule, FilterOtherSwitchersPipe],
})
export class SwitchOtherChoicesComponent {
  @Input() reportData!: ISwitcherResponse2 | undefined | any; //props
  @Input() ID_CHOICE_VALUE!: string | undefined;
  @Input() itemdata!: any[];

getOtherChoiceShortName(sid: string | undefined): string[] {
  // Check if sid is provided
  if (!sid) {
    console.log('Undefined or invalid sid');
    return [];
  }

  console.log('Provided sid is:', sid);

  // Retrieve options
  const options = this.reportData?.data?.ques?.list[0]?.opt || [];

  // Create a map to store short_name values for the given sid
  const sidToShortName: { [key: string]: string } = {};

  // Populate sidToShortName map
  options.forEach((option: { other_choice: { [key: string]: { short_name: string } } }) => {
    if (option.other_choice) {
      Object.keys(option.other_choice).forEach((key) => {
        sidToShortName[key] = option.other_choice[key].short_name;
      });
    }
  });

  console.log('sidToShortName mapping is:', sidToShortName);

  // Retrieve and return short_names for the provided sid
  const matchingShortNames = options
    .flatMap((option: { other_choice: { [key: string]: { short_name: string } } }) =>
      option.other_choice && option.other_choice[sid] ? [option.other_choice[sid].short_name] : []
    );

  console.log('Matching short names for sid', sid, 'are:', matchingShortNames);

  return matchingShortNames;
}


}

// // Ensure sid is defined
// if (!sid) {
//   return [];
// }

// const option1 = this.reportData?.data?.ques?.list[0]?.opt || [];

// // Extract all the keys (sids) from the other_choice objects
// const keys = option1.flatMap((option: { other_choice: {}; }) =>
//   option.other_choice ? Object.keys(option.other_choice) : []
// );

// console.log( "the keys is :", keys)

//  // Retrieve options
//  const option2 = this.reportData?.data?.ques?.list[0]?.opt || [];

//  // Map each option's other_choice to a key-value pair where key is the sid and value is the short_name
//  const result: { [key: string]: string } = {};

//  option2.forEach((option: { other_choice: { [x: string]: { short_name: string; }; }; }) => {
//    if (option.other_choice) {
//      Object.keys(option.other_choice).forEach(sid => {
//        result[sid] = option.other_choice[sid].short_name;
//      });
//    }
//  });
//  console.log("the option2 is : ", option2)

// // Retrieve options
// const options3 = this.reportData?.data?.ques?.list[0]?.opt || [];

// // Filter options to find those with the specified sid in their other_choice
//  options3
//   .filter(
//     (option: { other_choice: { [x: string]: any } }) =>
//       option.other_choice && option.other_choice[sid]
//   )
//   .map(
//     (option: { other_choice: { [x: string]: { short_name: any } } }) =>
//       option.other_choice[sid].short_name
//   );

//   console.log("option3 is: ",options3)

//   return options3
