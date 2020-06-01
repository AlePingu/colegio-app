import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.page.html',
  styleUrls: ['./create-user.page.scss'],
})
export class CreateUserPage implements OnInit {

  private user_form : FormGroup;
  private message : string;
  private userTypes;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private globalService: GlobalService) {
    this.user_form = this.formBuilder.group({
      name: [''],
      ci: ['', Validators.required],
      address: [''],
      age: ['', Validators.required],
      phone: ['', Validators.required],
      password: [''],
      type: ['', Validators.required]
    });
  }

  ngOnInit() {
    var role = Number(this.globalService.getRole())
    if(role) {
      if(role == 1001) {
        this.userTypes = [
          {name: 'Director', code: 1001},
          {name: 'Profesor', code: 1002},
          {name: 'Estudiante', code: 1003},
          {name: 'Padre', code: 1004}
        ];
      }else if(role == 1002) {
        this.userTypes = [
          {name: 'Estudiante', code: 1003},
          {name: 'Padre', code: 1004}
        ];
      }
    }
  }

  createUser() {
    //do something
    this.usersService.createUser(this.user_form.value.name, this.user_form.value.ci, this.user_form.value.address, this.user_form.value.age, this.user_form.value.phone, this.user_form.value.password, this.user_form.value.type).subscribe(data => {
      console.log(data);
      this.message = 'Usuario creado exitosamente';
    }, error => {
      console.log(error);
      this.message = 'Error al crear usuario'
    });
  }

}
