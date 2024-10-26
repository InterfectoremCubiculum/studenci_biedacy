import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'countStudents',
  standalone: true
})
export class CountStudentsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
