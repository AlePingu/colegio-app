import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  getHost()
  {
    return 'https://vast-journey-44452.herokuapp.com/';
    // return 'http://localhost:3000/'
  }

  getToken() {
    return localStorage.getItem('currentToken');
  }
  setToken(newToken) {
    localStorage.setItem('currentToken', newToken);
  }
  removeToken()
  {
    localStorage.removeItem('currentToken');
    localStorage.removeItem('roles');
  }

  getRoles() {
    return JSON.parse(localStorage.getItem('roles'));
  }
  setRoles(roles) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }
}
