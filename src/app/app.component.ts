import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { AddStudentComponent } from './add-student/add-student.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentsComponent, AddStudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'studenci_biedacy';
}
