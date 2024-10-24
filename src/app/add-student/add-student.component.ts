import { Component, input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Student } from '../students/students.component';

@Component({
  selector: 'app-add-student',
  standalone: true,
  imports: [],
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
 
  onSubmit() {
  }

}

