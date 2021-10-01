import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  @Input() courses: any;
  @Input() areCoursesEditable: any;
  @Output() newEvent = new EventEmitter<string>()

  showCourse: string = "Show Course";
  iconPen: string = "pen";
  iconTrash: string = "trash";

  handleClick(event: any): void {
    this.newEvent.emit(event);
  }

  ngOnInit(): void {
  }

}
