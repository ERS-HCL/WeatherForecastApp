import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(str:string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
