import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fun2',
  standalone:true
})
export class Fun2Pipe implements PipeTransform {

  transform(value: unknown, arg:string): any {
    return null;
  }

}
