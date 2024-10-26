  import { Component } from '@angular/core'; 
  import { AddStudentComponent } from "../add-student/add-student.component";
  import { EditStudentComponent } from '../edit-student/edit-student.component';
  import { LOCALE_ID } from '@angular/core';
  import { CommonModule } from '@angular/common';
  @Component({
    selector: 'app-students',
    standalone: true,
    imports: [ CommonModule,AddStudentComponent, EditStudentComponent],
    templateUrl: './students.component.html',
    styleUrl: './students.component.css',
    providers: [{ provide: LOCALE_ID, useValue: 'pl' }]

  })
  
  export class StudentsComponent {
    tytul_listy: string = 'Lista wszystkich studentów';
    selected = -1;
    studentRules: {[k: string]: string} = {
      '=0': 'Studentów',
      '=1': 'Student',
      'other': 'Studentów',
    };
    studenci: Student[] = [
      new Student('Adam', 'Małysz', 20, [3, 5, 2, 1]),
      new Student('Janusz', 'Kowalski', 18, [4, 3, 5, 6]),
      new Student('Edward', 'Gierek', 21, [3, 4, 3, 3]),
      new Student('Basia', 'Dasia', 22, [3, 2, 3, 4]),
      new Student('Ania', 'Fajna', 19, [2, 5, 1, 2])
    ];

    toggleAge(student: Student): void {
      student.showWiek = !student.showWiek;
    }
    toggleGrade(student: Student): void {
      student.showOceny = !student.showOceny;
    }
    
    onSaveStudent(student: { name: string; surname: string; age: number }) {
      this.studenci.push(new Student(student.name, student.surname, student.age, []))
    }
    onEditStudent(student: { name: string; surname: string; age: number}) {
      if (this.selected != -1) {
        let tempStudent : Student  = this.studenci[this.selected]
        tempStudent.imie = student.name;
        tempStudent.nazwisko = student.surname;
        tempStudent.wiek = student.age;
      }
    }
    addGrade($event: { grade: number; }){ 
    if(this.selected!== -1)
      {      
          this.studenci[this.selected].dodajOcena($event.grade)
      }
    }
    select(which:number):void{
      this.selected=which;
    }
  }
  export class Student {
    private _imie: string;
    private _nazwisko: string;
    private _wiek: number;
    private _oceny: number[];
    public showWiek: boolean = false;
    public showOceny: boolean = false;

    public constructor(imie: string, nazwisko: string, wiek: number, oceny: number[]) {
      this._imie = imie;
      this._nazwisko = nazwisko;
      this._wiek = wiek;
      this._oceny = oceny;
    }
    get imie(): string {
      return this._imie;
    }
  
    set imie(value: string) {
      this._imie = value;
    }
  
    get nazwisko(): string {
      return this._nazwisko;
    }
  
    set nazwisko(value: string) {
      this._nazwisko = value;
    }
  
    get wiek(): number {
      return this._wiek;
    }
  
    set wiek(value: number) {
      this._wiek = value;
    }
  
    get oceny(): number[] {
      return this._oceny;
    }
  
    set oceny(value: number[]) {
      this._oceny = value;
    }
    public dodajOcena(ocena: number){
      this._oceny.push(ocena);
    }

}