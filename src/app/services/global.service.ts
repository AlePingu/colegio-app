import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  getHost()
  {
    // return 'https://vast-journey-44452.herokuapp.com/';
    return 'http://localhost:3000/'
  }

  getToken() {
    return localStorage.getItem('currentToken');
  }
  setToken(newToken) {
    localStorage.setItem('currentToken', newToken);
  }

  getRole() {
    return localStorage.getItem('role');
  }
  setRole(role) {
    localStorage.setItem('role', role);
  }
}
