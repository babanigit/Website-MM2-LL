// filter the dropdown list

import { Pipe, PipeTransform } from '@angular/core';
import { IGetDropdown } from '../models/interfaces';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(items: IGetDropdown[], searchText: string): IGetDropdown[] | [{Company:string}] | any[] {
    //cases
    if (!items) return [];
    if (!searchText) return items;

    //filtered the data which haves tag="stock"
    let onlyStock: IGetDropdown[] = items.filter((item) => item.tag === 'Stock');

    //filtering as per search text
    searchText = searchText.toLowerCase();
    let getCompany: IGetDropdown[] = onlyStock.filter((item) => {
      return (
        item.Company.toLowerCase().includes(searchText)
        // || item.sname.toLowerCase().includes(searchText)
      );
    });

    // console.log('the data is : ', getCompany);

    //if there is no data
    if (getCompany.length === 0) {
      return [{ Company: 'Not Found' }];
    }

    return getCompany;
  }
}
