import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.page.html',
  styleUrls: ['./delete-user.page.scss'],
})
export class DeleteUserPage implements OnInit {

  private user_form : FormGroup;
  private message : string;
  private users;

  constructor(private formBuilder: FormBuilder, private usersService: UsersService) {
    this.user_form = this.formBuilder.group({
      user: [''],
    });
  }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.usersService.getUsers().subscribe(data => {
      this.users = data;
    }, error => {
      console.log(error);
    });
  }

  delete() {
    this.usersService.deleteUser(this.user_form.value.user).subscribe(data => {
      this.loadUsers();
      this.message = 'El usuario ha sido dado de baja';
    }, error => {
      console.log(error);
      this.message = '';
    });;
  }

}
