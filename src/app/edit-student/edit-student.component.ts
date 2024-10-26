import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../students/students.component';
@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  @Input() 
  set student(student: Student){

    this.name = student.imie;
    this.surname = student.nazwisko;
    this.age = student.wiek;
    console.log(student.imie)
  }
  name: string | undefined;
  surname: string | undefined;
  age: number | undefined;
  grade: number | undefined; 

  @Output() editStudent: EventEmitter<{ name: string; surname: string; age: number; }> = new EventEmitter();
  @Output() addStudentGrade: EventEmitter<{ grade: number }> = new EventEmitter();


  onSubmit() {
    this.editStudent.emit({
      name: this.name!,
      surname: this.surname!,
      age: this.age!,
    });
  }
  addGrade(){
    if (this.grade !== undefined) {
      this.addStudentGrade.emit({grade: this.grade!})
      this.grade = undefined;
    }
  }
}

