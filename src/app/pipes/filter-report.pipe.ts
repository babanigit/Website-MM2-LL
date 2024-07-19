import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterReport',
  standalone: true,
})
export class FilterReportPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    //case
    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    //filtering as per search text
    let getCompany: any[] = items.filter((item) => {
      return item.data.stock_details.sname.toLowerCase().includes(searchText);
      // || item.data.stock_details.short_name.toLowerCase().includes(searchText)
    });

    return getCompany;
  }
}
