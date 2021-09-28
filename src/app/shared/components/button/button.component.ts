import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {

  @Input() buttonText: any;
  @Input() iconPen: any;
  @Input() iconTrash: any;
  
  ngOnInit(): void {
  }
}
