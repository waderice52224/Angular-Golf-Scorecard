import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {WelcomeComponent} from '../welcome/welcome.component';
import {GolfCourseService} from '../golf-course/golf-course-service';
import {GolfCourse} from '../golf-course/golf-course';

@Component({
  selector: 'app-card',
  styleUrls: ['card.component.css'],
  templateUrl: 'card.component.html',
})
export class CardComponent {
  displayedColumns = ['player'];
  dataSource = new MatTableDataSource<any>(SCORECARD_DATA);
  numHoles: Number;
  golfCourse: GolfCourse;
  constructor(private golfCourseService: GolfCourseService) {
    for (let i = 0; i < this.numHoles; i++) {
      const name = `${i + 1}`;
      this.displayedColumns.push(name);
    }
    this.displayedColumns.push('total');
  this.golfCourse = this.golfCourseService.getGolfCourse();
  this.numHoles = this.golfCourse.h;
  }
}

const SCORECARD_DATA: any[] = [
  {
    'player': 'john',
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0,
    'total': 0
  },
  {
    'player': 'jane',
    '1': 0,
    '2': 0,
    '3': 0,
    '4': 0,
    '5': 0,
    '6': 0,
    '7': 0,
    '8': 0,
    '9': 0,
    'total': 0
  }
];
