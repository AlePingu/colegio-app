import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-create-grade',
  templateUrl: './create-grade.page.html',
  styleUrls: ['./create-grade.page.scss'],
})
export class CreateGradePage implements OnInit {

  private gradeForm : FormGroup;
  private teachers;
  private message : string;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private schoolService: SchoolService) {
    this.gradeForm = this.formBuilder.group({
      name: ['',  Validators.required],
      teacherId: ['',  Validators.required]
    });
  }

  ngOnInit() {
    this.loadTeachers();
  }

  loadTeachers() {
    this.usersService.getTeachers().subscribe(data => {
      this.teachers = data;
    }, error => {
      console.log(error);
    });
  }

  createGrade() {
    //do something
    this.schoolService.createGrade(this.gradeForm.value.name, this.gradeForm.value.teacherId).subscribe(data => {
      console.log(data);
      this.message = 'Curso creado exitosamente';
    }, error => {
      console.log(error);
      this.message = 'Error al crear curso'
    });
  }

}
