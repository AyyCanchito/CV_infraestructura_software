import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lowercaseVowels',
  standalone: true
})
export class LowercaseVowelsPipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/[AEIOUaeiou]/g, letra => letra.toLowerCase());
  }
}