import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.page.html',
  styleUrls: ['./change-password.page.scss'],
})
export class ChangePasswordPage implements OnInit {

  private userForm : FormGroup;
  private message : string;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {
    this.userForm = this.formBuilder.group({
      password: ['', Validators.required],
      newPassword: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  changePassword() {
    this.usersService.changePassword(this.userForm.value.password, this.userForm.value.new_password).subscribe(data => {
      console.log(data);
      this.message = 'Contraseña cambiada';
    }, error => {
      console.log(error);
      this.message = 'La contraseña no coincide'
    });
  }

}
