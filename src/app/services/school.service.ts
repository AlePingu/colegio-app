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

  createEnrollment(grade_id, student_id) {
    return this.http.post(this.global.getHost() + '/grades/' + grade_id + '/enrollments' , { student_id }, { headers: { 'Authorization': this.global.getToken() } })
  }

  getMyGrades()
  {
    return this.http.get(this.global.getHost() + '/grades/my', { headers: { 'Authorization': this.global.getToken() } });
  }
}
