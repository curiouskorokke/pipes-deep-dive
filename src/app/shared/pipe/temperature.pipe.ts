import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp',
  standalone: true,
})
export class TempPipe implements PipeTransform {
  transform(
    value: number,
    inputScale: 'cel' | 'fah' = 'cel',
    outputScale: 'cel' | 'fah' = 'cel'
  ) {
    let temp = value;

    if (inputScale === 'cel' && outputScale === 'fah') {
      temp = (value * 9) / 5 + 32;
    }

    if (inputScale === 'fah' && outputScale === 'fah') {
      temp = ((value - 32) * 5) / 9;
    }

    return `${temp.toFixed(2)}${outputScale === 'cel' ? '°C' : '°F'}`;
  }
}
