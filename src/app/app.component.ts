import { Component } from '@angular/core';
import {GolfCourseService} from './golf-course/golf-course-service';
import {OnInit} from '@angular/core';
import {GolfCourse} from './golf-course/golf-course';
import {Observable} from 'rxjs/Observable';
import {ApiRetrn} from './golf-course/api-retrns';


@Component({
  selector: 'app-root',
  template: `
    <ul class="nav navbar-nav">
      <li><a [routerLink]="['/welcome']">Welcome</a></li>
      <li><a [routerLink]="['/card']">card</a></li>
    </ul>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  golfCourses: GolfCourse[];
  selected: number;

  constructor(private golfCourseService: GolfCourseService) {

  }
  golfCourse: GolfCourse;


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
    this.golfCourseService.getCourse(this.selected).subscribe((response: any) => {
      // console.log(golfCourses);
      this.golfCourse = response.course;
      // let teeTypes: any = golfCourses.courses;
      // console.log(teeTypes);
      // console.log(this.golfCourses);
      // console.log(this.golfCourses === golfCourses);
    });
  }

  teeTypes(tee) {
    console.log(tee);
  }
}

