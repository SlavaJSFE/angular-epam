import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})

export class CourseCardComponent implements OnInit {

  @Input() course: any;

  addZero(hours: number): string {
    return hours < 10 ? `0${hours}` : `${hours}`;
  }

  transformMinutesToHours(minuts: number): string {
    const hours: number = Math.floor(minuts / 60);
    const restOfMinuts: number = minuts % 60;
    
    return `${this.addZero(hours)}:${this.addZero(restOfMinuts)} ${hours > 1 ? "hours" : "hour"}`;
  }

  ngOnInit(): void {
  }
}
