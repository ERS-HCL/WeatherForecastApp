import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cloudiness'
})
export class CloudinessPipe implements PipeTransform {

  transform(value: number) {
    let description: string = '';

    if (value >= 0 && value <= 20) {
      description = 'clear sky';
    } else if (value > 20 && value <= 40) {
      description = 'few clouds';
    } else if (value > 40 && value <= 60) {
      description = 'scattered clouds';
    }else if (value > 60 && value <= 80) {
      description = 'broken clouds';
    } else {
      description = 'overcast clouds';
    }
    return description;
  }

}
