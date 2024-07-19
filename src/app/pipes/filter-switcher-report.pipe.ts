import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSwitcherReport',
  standalone:true
})
export class FilterSwitcherReportPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {


        //case
        if (!items) return [];
        if (!searchText) return items;

        searchText = searchText.toLowerCase();

        //filtering as per search text
        let getSwitcherReport: any[] = items.filter((item) => {
          return item.data.sname.toLowerCase().includes(searchText);
          // || item.data.stock_details.short_name.toLowerCase().includes(searchText)
        });

        return getSwitcherReport;

  }

}
