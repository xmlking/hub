import { Component, Input, OnInit } from '@angular/core';
import { single, multi } from './data';
import {ActiveUser} from "../../models/active-user";

@Component({
  selector: 'app-number-card',
  templateUrl: './number-card.component.html',
  styleUrls: ['./number-card.component.scss']
})
export class NumberCardComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [600, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  @Input() user: ActiveUser;
  constructor() {
    Object.assign(this, {single});
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
