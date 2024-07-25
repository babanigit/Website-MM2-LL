import { Pipe, PipeTransform } from '@angular/core';
import { ISwitcherReportData } from '../assets/switcherReportsData';

@Pipe({
  name: 'filterChoiceResult',
  standalone: true,
})
export class FilterChoiceResultPipe implements PipeTransform {
  transform(
    items: ISwitcherReportData[],
    searchText: string | undefined,
    idstring: string
  ): ISwitcherReportData[] {
    //case
    if (!items) return [];
    if (searchText == undefined) {
      console.log('serachtext is undefined, from filter choice pipe');
      return [];
    }

    searchText = searchText.toString();
    console.log('choice pipe idstring  ', idstring, typeof idstring);
    console.log('choice pipe searchText  ', searchText, typeof searchText);

    //filtering as per search text
    let getSwitcherReport: any[] = items.filter((item) => {
      return item.data.stockids[1].includes(searchText);
    });

    //filtering as per id text
    let getSwitcherReport2: any[] = getSwitcherReport.filter((item) => {
      return item.data.stockids[0].includes(idstring);
    });

    console.log('choice pipe this is the return : ', getSwitcherReport);
    // console.log(getSwitcherReport);
    return getSwitcherReport2;
  }
}
