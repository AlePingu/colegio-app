import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  private user_form : FormGroup;
  private message : string;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {
    this.user_form = this.formBuilder.group({
      name: [''],
      ci: ['', Validators.required],
      address: [''],
      age: ['', Validators.required],
      phone: ['', Validators.required],
      password: [''],
    });
  }

  ngOnInit() {
  }

  createUser() {
    //do something
    this.usersService.createUser(this.user_form.value.name, this.user_form.value.ci, this.user_form.value.address, this.user_form.value.age, this.user_form.value.phone, this.user_form.value.password, 1004).subscribe(data => {
      console.log(data);
      this.message = 'Usuario creado exitosamente';
    }, error => {
      console.log(error);
      this.message = 'Error al crear usuario'
    });
  }

}
