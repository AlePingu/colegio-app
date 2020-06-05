import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private global: GlobalService) { }

  createUser(name, ci, address, age, phone, password, role_code) {
    return this.http.post(this.global.getHost() + '/users', { name, ci, address, age, phone, password, role_code }, { headers: { 'Authorization': this.global.getToken() } });
  }

  getUsers() {
    return this.http.get(this.global.getHost() + '/users', { headers: { 'Authorization': this.global.getToken() } })
  }

  deleteUser(id) {
    return this.http.delete(this.global.getHost() + '/users/' + id, { headers: { 'Authorization': this.global.getToken() } });
  }

  changePassword(password, new_password) {
    return this.http.put(this.global.getHost() + '/users/update_password', { password, new_password },{ headers: { 'Authorization': this.global.getToken() } });
  }

}
