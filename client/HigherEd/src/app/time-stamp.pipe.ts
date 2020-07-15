import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeStamp'
})
export class TimeStampPipe implements PipeTransform {

  transform(value: number): string {
    let minutes: number = Math.round(value / 60);
    let seconds: number = Math.round(value % 60);
    return minutes + ':' + seconds;
  }

}
