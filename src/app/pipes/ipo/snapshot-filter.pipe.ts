import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'snapshotFilter',
  standalone:true
})
export class SnapshotFilterPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;

    
  }

}
