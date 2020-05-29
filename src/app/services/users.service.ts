import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private global: GlobalService) { }

  createUser(name, ci, address, age, phone, password, role_code) {
    console.log(this.global.getToken() + '!');
    return this.http.post(this.global.getHost() + '/users', { name, ci, address, age, phone, password, role_code }, { headers: { 'Authorization': this.global.getToken() } });
  }
}
