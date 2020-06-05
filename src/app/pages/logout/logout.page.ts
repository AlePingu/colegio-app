import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {

  constructor(private router: Router, private global: GlobalService) { }

  ngOnInit() {
    this.global.removeToken();
    this.router.navigate(['/']).then(() => { window.location.reload() });
  }

}
