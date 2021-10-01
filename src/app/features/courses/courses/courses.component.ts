import { Component, OnInit } from '@angular/core';
import { courses } from '../constants';

interface Courses {
  title: string;
  description: string;
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})

export class CoursesComponent implements OnInit {

  showCourse: string = "Show Course";
  iconPen: string = "pen";
  iconTrash: string = "trash";
  infoTitle: string = "Your list is empty";
  addNewCourse: string = "Add new course";
  infoText: string = `Please use the \"${this.addNewCourse}\" button to add your first course`;
  courses: Courses[] = courses;
  areCoursesEditable: boolean = false;
  handleEvent(event: any):void {
    console.log(`You have pressed button "${event.target.innerText}"`);
  }

  ngOnInit(): void {
  }

}
