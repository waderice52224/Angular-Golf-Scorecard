import { Component, OnInit } from '@angular/core';
import {GolfCourse} from '../golf-course/golf-course';
import {GolfCourseService} from '../golf-course/golf-course-service';
import {ApiRetrn} from '../golf-course/api-retrns';
import {Observable} from 'rxjs/Observable';





@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  golfCourses: GolfCourse[];
  golfCourse: GolfCourse;
  selected: GolfCourse;

  constructor(private golfCourseService: GolfCourseService) {
  }

  ngOnInit() {
    this.golfCourseService.getGolfCourses().subscribe((golfCourses: ApiRetrn) => {
      this.golfCourses = golfCourses.courses;
      console.log(this.golfCourses);
      console.log(this);
      // const courses = this.golfCourses;
      // console.log(this.golfCourses === golfCourses);
    });
  }

  runThis(courseId: Observable<GolfCourse>) {
    this.golfCourseService.getCourse(this.golfCourse.id).subscribe((response: any) => {
      // console.log(golfCourses);
      this.golfCourse = response.course;
      // let teeTypes: any = golfCourses.courses;
      // console.log(teeTypes);
      console.log(this.golfCourses);
      console.log(response);
      // console.log(this.golfCourses === golfCourses);
      // return response;
    });
  }

  teeTypes(tee) {
    console.log(tee);
    this.golfCourseService.setCurrentCourse(this.golfCourse);
  }
}
