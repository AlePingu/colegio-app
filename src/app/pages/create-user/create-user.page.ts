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

  private userForm : FormGroup;
  private message : string;
  private userTypes;
  private parents;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private globalService: GlobalService) {
    this.userForm = this.formBuilder.group({
      name: [''],
      ci: ['', Validators.required],
      address: [''],
      age: ['', Validators.required],
      phone: ['', Validators.required],
      password: [''],
      type: ['', Validators.required],
      parentId: ['']
    });
  }

  ngOnInit() {
    var roles = this.globalService.getRoles();
    if(roles) {
      if(roles.includes(1001)) {
        this.userTypes = [
          {name: 'Director', code: 1001},
          {name: 'Profesor', code: 1002},
        ];
      }else if(roles.includes(1002)) {
        this.userTypes = [
          {name: 'Estudiante', code: 1003},
          {name: 'Padre', code: 1004}
        ];
      }
    }
    this.loadParents()
  }
  loadParents() {
    this.usersService.getParents().subscribe(data => {
      this.parents = data;
    }, error => {
      console.log(error);
    });
  }

  createUser() {
    //do something
    this.usersService.createUser(this.userForm.value.name, this.userForm.value.ci, this.userForm.value.address, this.userForm.value.age, this.userForm.value.phone, this.userForm.value.password, this.userForm.value.type, this.userForm.value.parentId).subscribe(data => {
      console.log(data);
      this.message = 'Usuario creado exitosamente';
      this.loadParents();
    }, error => {
      console.log(error);
      this.message = 'Error al crear usuario'
    });
  }

}
