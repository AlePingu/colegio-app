import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private login_form : FormGroup;

  constructor(private formBuilder: FormBuilder, private authService: AuthenticationService, private global: GlobalService) {
    this.login_form = this.formBuilder.group({
      ci: ['', Validators.required],
      password: [''],
    });
  }

  ngOnInit() {
  }

  login() {
    //do something
    this.authService.login(this.login_form.value.ci, this.login_form.value.password).subscribe(data => {
      console.log(data);
      this.global.setToken(data['auth_token']);
      this.global.setRole(data['role']);
      console.log(this.global.getToken());
    }, error => {
      console.log(error);
      this.global.setToken('');
    });
  }

}
