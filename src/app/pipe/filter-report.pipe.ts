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

    //   //filtered the data which haves tag="stock"
    //  let onlyStock:any[] = items.filter(item => item.tag === 'Stock');

    searchText = searchText.toLowerCase();

    //filtering as per search text
    let getCompany: any[] = items.filter((item) => {
      // console.log(
      //   item.data.stock_details.sname.toLowerCase().includes(searchText) ||
      //     item.data.stock_details.short_name.toLowerCase().includes(searchText)
      // );
      return (
        item.data.stock_details.sname.toLowerCase().includes(searchText) ||
        item.data.stock_details.short_name.toLowerCase().includes(searchText)
      );
    });

    return getCompany;
  }
}
