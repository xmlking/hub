import { Component, OnInit } from '@angular/core';
import {single, multi} from './data';
import { ColorHelper} from '@swimlane/ngx-charts';


@Component({
  selector: 'app-pie-grid',
  templateUrl: './pie-grid.component.html',
  styleUrls: ['./pie-grid.component.scss']
})
export class PieGridComponent implements OnInit {

  // pie
  showLabels = true;
  explodeSlices = false;
  doughnut = false;
  arcWidth = 0.25;

  single: any[];
  multi: any[];

  view: any[] = [700, 400];

  theme = 'dark';
  colorScheme: any = 'cool';


  constructor() {
    Object.assign(this, {single, multi});
  }

  select(data) {
    console.log('Item clicked', data);
  }

  onLegendLabelClick(entry) {
    console.log('Legend clicked', entry);
  }

  ngOnInit() {
  }

}
