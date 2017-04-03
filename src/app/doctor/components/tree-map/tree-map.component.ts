import { Component, Input, OnInit } from '@angular/core';
import { single } from './data';
import {ActiveUser} from "../../models/active-user";

@Component({
  selector: 'app-tree-map',
  templateUrl: './tree-map.component.html',
  styleUrls: ['./tree-map.component.scss']
})
export class TreeMapComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [600, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
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
