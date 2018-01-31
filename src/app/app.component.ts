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
export class AppComponent {

}

