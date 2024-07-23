import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterChoiceResult',
  standalone: true,
})
export class FilterChoiceResultPipe implements PipeTransform {

  transform(items: any[], searchText: string |undefined ): any[] {
    //case
    if (!items) return [];
    if (searchText == '') {
      console.log("helloeeee")
      return [];
    }

    if(searchText==undefined)
      {
        console.log("serachtext is undefined")
        return items
      }

    searchText = searchText.toLowerCase().toString();

    if (searchText.length >= 2) {
      //filtering as per search text
      let getSwitcherReport: any[] = items.filter((item) => {
        return item.data.stockids[1].toLowerCase().includes(searchText);
        // || item.data.stock_details.short_name.toLowerCase().includes(searchText)
      });

      console.log('hello choice pipe is working...');
      console.log(getSwitcherReport)
      return getSwitcherReport;
    }
     else {
      return [{ data: 'no' }];
    }
  }

}
