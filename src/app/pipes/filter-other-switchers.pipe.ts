import { Pipe, PipeTransform } from '@angular/core';
import { ISwitcherResponse2 } from '../assets/switcherGetRespone2';

@Pipe({
  name: 'filterOtherSwitchers',
  standalone: true,
})
export class FilterOtherSwitchersPipe implements PipeTransform {
  transform(items: ISwitcherResponse2[], searchText: string | undefined): any[] {

    //case
    // start
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toString()

    //filtering as per search text
    let getReport: any[] = items.filter((item) => {
      return item.data.ques?.list[0].opt[0].valsid.toString().includes(searchText);
    });

    console.log(' the other data is  ', getReport);
    return getReport;
    // end
  }
}
