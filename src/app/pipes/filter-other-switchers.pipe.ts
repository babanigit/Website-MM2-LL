import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOtherSwitchers',
  standalone: true,
})
export class FilterOtherSwitchersPipe implements PipeTransform {
  transform(items: any[], searchText: string |undefined): any[] {
    //case
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    //filtering as per search text
    let getReport: any[] = items.filter((item) => {
      return item.valsid.toString().includes(searchText);
      // || item.data.stock_details.short_name.toLowerCase().includes(searchText)
    });

    console.log(" the other data is  ",  getReport)

    return getReport;
  }

}
