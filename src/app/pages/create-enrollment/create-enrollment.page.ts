import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { SchoolService } from '../../services/school.service';

@Component({
  selector: 'app-create-enrollment',
  templateUrl: './create-enrollment.page.html',
  styleUrls: ['./create-enrollment.page.scss'],
})
export class CreateEnrollmentPage implements OnInit {

  private enrollmentForm : FormGroup;
  private grades;
  private students;
  private message : string;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private schoolService: SchoolService) {
    this.enrollmentForm = this.formBuilder.group({
      gradeId: ['',  Validators.required],
      studentId: ['',  Validators.required]
    });
  }

  ngOnInit() {
    this.loadGrades();
    this.loadStudents();
  }

  loadGrades() {
    this.schoolService.getMyGrades().subscribe(data => {
      this.grades = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }
  loadStudents() {
    this.usersService.getStudents().subscribe(data => {
      this.students = data;
      console.log(data);
    }, error => {
      console.log(error);
    });
  }

  createGrade() {
    //do something
    this.schoolService.createEnrollment(this.enrollmentForm.value.gradeId, this.enrollmentForm.value.enrollmentId).subscribe(data => {
      console.log(data);
      this.message = 'Curso creado exitosamente';
    }, error => {
      console.log(error);
      this.message = 'Error al crear curso'
    });
  }

}
