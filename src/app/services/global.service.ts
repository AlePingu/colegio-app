import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  getHost()
  {
    return 'https://vast-journey-44452.herokuapp.com/';
  }

  getToken() {
    return localStorage.getItem('currentToken');
  }
  setToken(newToken) {
    localStorage.setItem('currentToken', newToken);
  }
}
