import { style } from '@angular/animations';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validateGrade',
  standalone: true
})
export class ValidateGradePipe implements PipeTransform {

  transform(value: number[], minGrade: number = 2): string[] 
  {
    return value.map(g => g<=minGrade ?`<span style="color: red;">${g}</span>`:`${g}`)
  }

}
