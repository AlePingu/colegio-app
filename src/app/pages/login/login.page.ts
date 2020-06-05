import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../services/authentication.service';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginForm : FormGroup;
  private message;

  constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService, private global: GlobalService) {
    this.loginForm = this.formBuilder.group({
      ci: ['', Validators.required],
      password: [''],
    });
  }

  ngOnInit() {
  }

  login() {
    //do something
    this.authService.login(this.loginForm.value.ci, this.loginForm.value.password).subscribe(data => {
      console.log(data);
      this.global.setToken(data['auth_token']);
      this.global.setRoles(data['roles']);
      console.log(this.global.getToken());
      if(data['new_acount'] == true) {
        this.router.navigate(['/change-password']).then(() => { window.location.reload() });
      }else {
        this.router.navigate(['/']).then(() => { window.location.reload() });
      }
    }, error => {
      console.log(error);
      this.message = 'Los datos son incorrectos';
      this.global.removeToken();
    });
  }

}
