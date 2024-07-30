import { Pipe, PipeTransform } from '@angular/core';
import { ISwitcherReportsAndOptions } from '../models/switcherReportsAndOption';

@Pipe({
  name: 'filterOtherSwitchers',
  standalone: true,
})
export class FilterOtherSwitchersPipe implements PipeTransform {
  transform(
    items: ISwitcherReportsAndOptions[],
    ID_Choice: string | undefined
  ): ISwitcherReportsAndOptions[] {
    if (!items) return [];
    if (!ID_Choice) return items;

    ID_Choice = ID_Choice.toString();

    console.log('the items is : ', items);
    console.log('the searchtext is : ', ID_Choice, typeof ID_Choice);

      // getReport has all the options
      let getReport: ISwitcherReportsAndOptions[] = items.filter(

        (item: ISwitcherReportsAndOptions) => {

          const val = item.data.ques?.list[0].opt[0].valsid;
          if (val) {
            console.log('the valsid is : ', val);
            return val.toString().includes(ID_Choice);
          }
          return false;
          
        }

      );

    console.log(' the return data of filter other switcher is :  ', getReport);
    return getReport;
  }
}
