import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fun1',
  standalone: true,
})
export class Fun1Pipe implements PipeTransform {
  transform(items: any[], ID_Choice: string): any {
    if (!items || !ID_Choice) return [];

    ID_Choice = ID_Choice.toString().trim();

    console.log('The fun1 items are: ', items);
    console.log('The fun1 search text is: ', ID_Choice, typeof ID_Choice);

    // Filter items based on the given ID_Choice
    const getReport = items.filter((item: any) => {
      // Check if `ques` and `list` exist in item.data
      const optList = item.data?.ques?.list?.[0]?.opt;
      if (optList) {
        // Iterate through options to find if any `valsid` matches the `ID_Choice`
        return optList.some((opt: { valsid: any }) => {
          const val = opt.valsid;
          if (val) {
            return val.toString().includes(ID_Choice);
          }
          return false;
        });
      }
      return false;
    });

    console.log('Filtered items (getReport): ', getReport);

    // Extract options from the first matched item
    if (getReport.length > 0) {
      const opts = getReport[0].data?.ques?.list?.[0]?.opt;

      console.log('The opts are: ', opts);

      let otherChoices: any = null;

      if (opts) {
        for (const opt of opts) {
          if (opt.valsid.toString() === ID_Choice) {
            otherChoices = opt.other_choice;
            break;
          }
        }
      }

      console.log('Final other choices: ', otherChoices);
      return otherChoices;
    }

    return null;
  }
}
