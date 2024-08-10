import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  transform(args : number[]): string {
    return (args[0] *(1-args[1]/100)).toFixed(2);
  }

}
