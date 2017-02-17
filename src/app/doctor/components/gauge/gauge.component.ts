import { Component, OnInit } from '@angular/core';
import {single} from './data';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss']
})
export class GaugeComponent implements OnInit {

  view: any[] = [700, 400];
  data: any[];

  constructor() {
    this.data = single;
  }

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C']
  };

  onSelect(event) {
    console.log(event);
  }

  ngOnInit() {
  }

}
