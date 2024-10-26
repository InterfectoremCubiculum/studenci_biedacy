import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  @Input() name: string | undefined;
  @Input() surname: string | undefined;
  @Input() age: number | undefined;

  onSubmit() {
    this.saveStudent.emit({
      name: this.name!,
      surname: this.surname!,
      age: this.age!
    });
  }
  @Output() saveStudent: EventEmitter<{ name: string; surname: string; age: number }> = new EventEmitter();


}

