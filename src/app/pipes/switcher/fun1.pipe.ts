import { Pipe, PipeTransform } from '@angular/core';
import { IOtherChoice } from '../../models/otherChoice';
import { ISwitcherReportsAndOptions } from '../../models/switcherReportsAndOption';

@Pipe({
  name: 'fun1',
  standalone: true,
})
export class Fun1Pipe implements PipeTransform {
  transform(
    items: ISwitcherReportsAndOptions[],
    ID_Choice: string
  ): { [key: string]: IOtherChoice } | {} {
    if (!items || !ID_Choice) return {};

    ID_Choice = ID_Choice.toString().trim();

    const getReport = items.filter((item: ISwitcherReportsAndOptions) => {
      const optList = item.data?.ques?.list?.[0]?.opt;
      return optList
        ? optList.some((opt: { valsid: any }) =>
            opt.valsid?.toString().includes(ID_Choice)
          )
        : false;
    });

    console.log("the get report data is : ", getReport)

    if (getReport.length > 0) {
      const opts = getReport[0].data?.ques?.list?.[0]?.opt;
      if (opts) {
        for (const opt of opts) {
          if (opt.valsid.toString() === ID_Choice) {
            return opt.other_choice || {};
          }
        }
      }
    }
    
    console.log('the output of the pipe is :', getReport);
    return {}; // Default return empty object
  }
}
