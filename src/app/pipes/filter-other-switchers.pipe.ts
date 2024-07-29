import { Pipe, PipeTransform } from '@angular/core';
import { ISwitcherReportsAndOptions } from '../models/switcherReportsAndOption';

@Pipe({
  name: 'filterOtherSwitchers',
  standalone: true,
})
export class FilterOtherSwitchersPipe implements PipeTransform {
  transform(
    items: ISwitcherReportsAndOptions[],
    searchText: string | undefined
  ): ISwitcherReportsAndOptions[] {

    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toString();

    console.log('the items is : ', items);
    console.log('the searchtext is : ', searchText, typeof(searchText));

    //filtering as per search text
    let getReport: ISwitcherReportsAndOptions[] = items.filter((item:ISwitcherReportsAndOptions) => {
      console.log(' the valsid is : ', item.data.ques?.list[0].opt[0].valsid);

      item.data.ques?.list[0].opt[0].valsid
        .toString()
        .includes(searchText);
    });

    console.log(' the other data is  ', getReport);
    return getReport;
  }
}
