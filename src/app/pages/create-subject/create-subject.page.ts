import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-subject',
  templateUrl: './create-subject.page.html',
  styleUrls: ['./create-subject.page.scss'],
})
export class CreateSubjectPage implements OnInit {

  private subject_form : FormGroup;
  private message : string;

  constructor(private formBuilder: FormBuilder) {
    this.subject_form = this.formBuilder.group({
      name: ['']
    });
  }

  ngOnInit() {
  }

  createSubject() {
    //do something
    this.message = 'materia creada'
  }

}
