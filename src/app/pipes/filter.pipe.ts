import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any {
    //cases
    if (!items) return [];
    if (!searchText) return items;

    //filtered the data which haves tag="stock"
    let onlyStock: any[] = items.filter((item) => item.tag === 'Stock');

    //filtering as per search text
    searchText = searchText.toLowerCase();
    let getCompany: any[] = onlyStock.filter((item) => {
      return item.Company.toLowerCase().includes(searchText);
    });

    console.log('the data is : ', getCompany);

    //if there is no data
    if (getCompany.length === 0) {
      return [
        { Company: 'Not found' },
      ];
    }

    return getCompany;
  }
}
