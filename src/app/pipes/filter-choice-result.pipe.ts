import { Pipe, PipeTransform } from '@angular/core';
import { ISwitcherReportData } from '../assets/switcherReportsData';

@Pipe({
  name: 'filterChoiceResult',
  standalone: true,
})
export class FilterChoiceResultPipe implements PipeTransform {
  transform(
    items: ISwitcherReportData[],
    searchText: string | undefined
  ): ISwitcherReportData[] {
    //case
    if (!items) return [];
    if (searchText == undefined) {
      console.log('serachtext is undefined, fro filter choice pipe');
      return items;
    }

    searchText = searchText.toString();
    console.log('choice pipe searchText  ', searchText, typeof searchText);

    //filtering as per search text
    let getSwitcherReport: any[] = items.filter((item) => {
      console.log(
        ' choice pipe all items item.data.stockids[1]  ',
        item.data.stockids[1]
      );

      return item.data.stockids[1].includes(searchText);
      // || item.data.stock_details.short_name.toLowerCase().includes(searchText)
    });

    console.log('choice pipe this is the return : ', getSwitcherReport);
    // console.log(getSwitcherReport);
    return getSwitcherReport;
  }
}
