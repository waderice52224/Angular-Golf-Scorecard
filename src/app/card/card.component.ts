import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material';


@Component({
  selector: 'app-card',
  styleUrls: ['card.component.css'],
  templateUrl: 'card.component.html',
})
export class CardComponent {
  displayedColumns = ['player'];
  dataSource = new MatTableDataSource<any>(SCORECARD_DATA);
  numHoles: Number = 9;

  constructor() {
    for (let i = 0; i < this.numHoles; i++) {
      const name = `${i + 1}`;
      this.displayedColumns.push(name);
    }
    this.displayedColumns.push('total');
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
    'total': 0
  }
]
