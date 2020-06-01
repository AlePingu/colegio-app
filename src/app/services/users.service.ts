import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient, private global: GlobalService) { }

  createUser(name, ci, address, age, phone, password, role_code) {
    if(role_code == 1001) {
      return this.http.post(this.global.getHost() + '/users/director', { name, ci, address, age, phone, password }, { headers: { 'Authorization': this.global.getToken() } });
    }else if(role_code == 1002){
      return this.http.post(this.global.getHost() + '/users/teacher', { name, ci, address, age, phone, password }, { headers: { 'Authorization': this.global.getToken() } });
    }else if(role_code == 1003){
      return this.http.post(this.global.getHost() + '/users/student', { name, ci, address, age, phone, password }, { headers: { 'Authorization': this.global.getToken() } });
    }else if(role_code == 1004){
      return this.http.post(this.global.getHost() + '/users/parent', { name, ci, address, age, phone, password }, { headers: { 'Authorization': this.global.getToken() } });
    }
  }

  getUsers() {
    return this.http.get(this.global.getHost() + '/users', { headers: { 'Authorization': this.global.getToken() } })
  }

  deleteUser(id) {
    return this.http.delete(this.global.getHost() + '/users/' + id, { headers: { 'Authorization': this.global.getToken() } });
  }

}
