import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss']
})

export class CourseCardComponent implements OnInit {

  title: string = "Angular";
  description: string = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quaerat iusto rem et iure minus ullam reprehenderit quo omnis quia, asperiores ut voluptas nihil id veniam tempora placeat. Nulla optio voluptatum numquam ipsa, aliquid nihil ducimus cumque natus voluptates impedit cupiditate. Commodi ut, quam aspernatur perspiciatis itaque labore? Doloremque, obcaecati.";
  authors: string[] = ["Author 1", "Author 2"];
  duration: number = 121;
  creationDate: Date =  new Date(2012, 2, 20);

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
