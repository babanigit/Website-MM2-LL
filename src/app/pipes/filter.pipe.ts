import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any {

    //case
    if (!items) return [];
    if (!searchText) return items;

     //filtered the data which haves tag="stock"
    let onlyStock:any[] = items.filter(item => item.tag === 'Stock');

    searchText = searchText.toLowerCase();

    //filtering as per search text
    let getCompany:any[] = onlyStock.filter(item => {
      return item.Company.toLowerCase().includes(searchText);
    });

    console.log("the data is : ",getCompany)

    return getCompany;
  }
}
