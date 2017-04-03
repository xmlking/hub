import {Component, Input, OnInit} from '@angular/core';
import { single } from './data';
import {ActiveUser} from "../../models/active-user";

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };
  view: any[] = [700, 400];
  data: any[];
  @Input() user: ActiveUser;
  constructor() {
    this.data = single;
  }

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
