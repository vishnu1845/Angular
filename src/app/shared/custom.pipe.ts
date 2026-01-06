import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: any, gender: string): string {
    let prefix = gender.toLowerCase() === 'male' ? 'Mr.' :
                 gender.toLowerCase() === 'female' ? 'Ms.' : ''
    
    return `${prefix} ${value}`
  }

}
