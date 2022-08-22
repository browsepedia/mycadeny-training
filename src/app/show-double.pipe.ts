import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'showDouble',
})
export class ShowDoublePipe implements PipeTransform {
  transform(value: number) {
    if (Number.isNaN(value)) {
      throw new Error('Must pass value number to ShowDoublePipe');
    }
    return value * 2;
  }
}
