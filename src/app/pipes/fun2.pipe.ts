import { Pipe, PipeTransform } from '@angular/core';
import { ISwitcherReportsAndOptions } from '../models/switcherReportsAndOption';

@Pipe({
  name: 'fun2',
  standalone: true,
})
export class Fun2Pipe implements PipeTransform {
  transform(
    items: ISwitcherReportsAndOptions[],
    mainId: string
  ): ISwitcherReportsAndOptions[] {
    if (!items || !mainId) return [];

    console.log('fun2 items is : ', items);
    console.log('fun2 id is : ', mainId, typeof(mainId));

    // Filter items based on whether they contain the `ques` property
    // const filteredItems = items.filter((item: ISwitcherReportsAndOptions) => item.data?.ques);

    // Further filter items based on whether `sid` in `stock_details` matches `mainId`
    const result = items.filter((item: ISwitcherReportsAndOptions) => {
      const stockDetails = item.data?.verdict?.stock_details;
      if (stockDetails && stockDetails.sid) {
        return stockDetails.sid.toString() === mainId;
      }
      return false;
    });

    console.log('fun2 return is : ', result);

    return result;
  }
}
