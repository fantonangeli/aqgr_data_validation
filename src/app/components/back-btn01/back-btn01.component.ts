import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-btn01',
  template: `
        <a (click)="onClick()"><fa-icon [icon]="icon"></fa-icon></a>
  `,
  styleUrls: ['./back-btn01.component.scss']
})
export class BackBtn01Component {
    icon=faChevronLeft;

  constructor(private location:Location) { }

  onClick() {
    this.location.back();
  }

}
