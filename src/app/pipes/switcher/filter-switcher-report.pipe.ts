// filter the options and normal verdict report

import { Pipe, PipeTransform } from '@angular/core';
import { ISwitcherReportsAndOptions } from '../../models/switcherReportsAndOption';

@Pipe({
  name: 'filterSwitcherReport',
  standalone: true,
})
export class FilterSwitcherReportPipe implements PipeTransform {
  transform(items: ISwitcherReportsAndOptions[], searchText: string): ISwitcherReportsAndOptions[] {
    //case
    if (!items) return [];
    if (searchText == '') return [];

    searchText = searchText.toLowerCase();

    if (searchText.length >= 2) {
      //filtering as per search text
      let getSwitcherReport: any[] = items.filter((item) => {
        return item.data.sname.toLowerCase().includes(searchText);
        // || item.data.stock_details.short_name.toLowerCase().includes(searchText)
      });

      return getSwitcherReport;
    }
     else {
      return [];
    }
  }
}
