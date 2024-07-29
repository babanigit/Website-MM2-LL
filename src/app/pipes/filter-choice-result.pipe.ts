// filter the main switcher report

import { Pipe, PipeTransform } from '@angular/core';
import { ISwitcherResult } from '../models/switcherResult';

@Pipe({
  name: 'filterChoiceResult',
  standalone: true,
})
export class FilterChoiceResultPipe implements PipeTransform {
  transform(
    items: ISwitcherResult[],
    searchText: string | undefined,
    idstring: string
  ): ISwitcherResult[] {
    //case
    if (!items) return [];
    if (searchText == undefined) {
      console.log('serachtext is undefined, from filter choice pipe');
      return [];
    }

    searchText = searchText.toString();

    //filtering as per search text
    let getSwitcherReport: any[] = items.filter((item) => {
      return item.data.stockids[1].includes(searchText);
    });

    //filtering as per id text
    let getSwitcherReport2: any[] = getSwitcherReport.filter((item) => {
      return item.data.stockids[0].includes(idstring);
    });

    // console.log('choice pipe this is the return : ', getSwitcherReport2);
    // console.log(getSwitcherReport);
    return getSwitcherReport2;
  }
}
