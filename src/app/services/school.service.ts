import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { GlobalService } from './global.service';

@Injectable({
  providedIn: 'root'
})
export class SchoolService {

  constructor(private http: HttpClient, private global: GlobalService) {}

  createGrade(name, teacher_id) {
    return this.http.post(this.global.getHost() + '/grades', { name, teacher_id }, { headers: { 'Authorization': this.global.getToken() } });
  }

  createQualification(first_trimester, second_trimester, third_trimester, subject_id, enrollment_id) {
    return this.http.post(this.global.getHost() + '/subjects/' + subject_id + '/qualifications' , { first_trimester, second_trimester, third_trimester, enrollment_id }, { headers: { 'Authorization': this.global.getToken() } })
  }
}
