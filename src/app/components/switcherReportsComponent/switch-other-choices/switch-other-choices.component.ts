import { Component, Input } from '@angular/core';
import { ISwitcherResponse2 } from '../../../../assets/switcherGetRespone2';
import { CommonModule } from '@angular/common';
import { FilterOtherSwitchersPipe } from '../../../pipes/filter-other-switchers.pipe';

@Component({
  selector: 'app-switch-other-choices',
  templateUrl: './switch-other-choices.component.html',
  styleUrl: './switch-other-choices.component.css',
  standalone: true,
  imports: [
    CommonModule,
    FilterOtherSwitchersPipe
  ],
})
export class SwitchOtherChoicesComponent {

  @Input() reportData!: ISwitcherResponse2 | undefined |any //props
  @Input() ID_CHOICE_VALUE!:string |undefined;




// // Accessing the 'list' array under 'ques'
// const list:any[] = this.reportData.data.ques.list;

// // Iterate through each item in the 'list' array
// list.forEach((item: any):any => {
//   // Accessing the 'opt' array under each 'list' item
//   const options: any[] = item.opt;

//   // Iterate through each option in the 'opt' array
//   options.forEach((option: any) => {
//     // Check if the current option has 'other_choice' property
//     if (option.other_choice) {
//       // Accessing the 'other_choice' object
//       const otherChoice: { [key: string]: any } = option.other_choice;

//       // Log or manipulate the 'other_choice' object as needed
//       console.log(otherChoice);

//       // Example: Accessing specific properties from 'other_choice'
//       const sid112501 = otherChoice['112501'];
//       console.log(sid112501); // This will log the object with sid: 112501
//     }
//   });
// });

}
