import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-grade',
  templateUrl: './create-grade.page.html',
  styleUrls: ['./create-grade.page.scss'],
})
export class CreateGradePage implements OnInit {

  private grade_form : FormGroup;
  private message : string;

  constructor(private formBuilder: FormBuilder) {
    this.grade_form = this.formBuilder.group({
      name: ['']
    });
  }

  ngOnInit() {
  }

}
