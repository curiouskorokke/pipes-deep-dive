import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true,
  // pure: false,
})
export class SortPipe implements PipeTransform {
  transform(value: number[], order: 'des' | 'asc') {
    console.log('hello');
    if (order === 'asc') {
      return value.sort((a, b) => (a < b ? -1 : 1));
    }

    return value.sort((a, b) => (a < b ? 1 : -1));
  }
}
