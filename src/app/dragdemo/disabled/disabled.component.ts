import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-disabled',
  templateUrl: './disabled.component.html',
  styleUrls: ['./disabled.component.css']
})
export class DisabledComponent implements OnInit {
  items = [
    {value: 'I can be dragged', disabled: false},
    {value: 'I cannot be dragged', disabled: true},
    {value: 'I can also be dragged', disabled: false}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.items, event.previousIndex, event.currentIndex);
  }
}
