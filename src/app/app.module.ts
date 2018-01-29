import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {GolfCourseService} from './golf-course/golf-course-service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { MatSelectModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import { CardComponent } from './card/card.component';




@NgModule({
  declarations: [
    AppComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    MatSelectModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: 'welcome', component: AppComponent},
      { path: 'card', component: CardComponent}
    ])
  ],
  providers: [
    GolfCourseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
