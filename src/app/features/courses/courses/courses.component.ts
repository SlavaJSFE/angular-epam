import { Component, OnInit } from '@angular/core';

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

  ngOnInit(): void {
  }

}
