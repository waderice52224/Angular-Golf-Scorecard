import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {GolfCourse} from './golf-course';
import {ApiRetrn} from './api-retrns';

@Injectable()
export class GolfCourseService {

  url = 'https://golf-courses-api.herokuapp.com';

  constructor(private httpClient: HttpClient) {
  }

  getGolfCourses(): Observable<ApiRetrn> {
    return this.httpClient.post<ApiRetrn>(`${this.url}/courses`, {
      latitude: 40.396419,
      longitude: -111.9328359,
      radius: 60
    });
  }

  getCourse(courseId): Observable<GolfCourse> {
    return this.httpClient.get<GolfCourse>(`${this.url}/courses/${courseId}`);
  }
}
