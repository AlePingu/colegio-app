import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.page.html',
  styleUrls: ['./create-subject.page.scss'],
})
export class CreateSubjectPage implements OnInit {

  private subjectForm : FormGroup;
  private teachers;
  private grades;
  private message : string;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private schoolService: SchoolService) {
    this.subjectForm = this.formBuilder.group({
      name: [''],
      teacherId: ['',  Validators.required],
      gradeId: ['',  Validators.required]
    });
  }

  ngOnInit() {
    this.loadTeachers();
    this.loadGrades();
  }

  createSubject() {
    this.message = 'materia creada'
  }

  loadTeachers() {
    this.usersService.getTeachers().subscribe(data => {
      this.teachers = data;
    }, error => {
      console.log(error);
    });
  }

  loadGrades() {
    this.schoolService.getGrades().subscribe(data => {
      this.grades = data;
    }, error => {
      console.log(error);
    });
  }

}
