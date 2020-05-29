import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient, private global: GlobalService) { }

  login(ci: number, password: string) {
    console.log({ ci, password })
    return this.http.post(this.global.getHost() + '/authenticate', { ci, password });
  }
}
