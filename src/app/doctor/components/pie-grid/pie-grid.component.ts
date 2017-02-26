import {Component, Input, OnInit} from '@angular/core';
import {single, multi} from './data';
import {ActiveUser} from '../../services/active-users.service';

@Component({
  selector: 'app-pie-grid',
  templateUrl: './pie-grid.component.html',
  styleUrls: ['./pie-grid.component.scss']
})
export class PieGridComponent implements OnInit {

  single: any[];
  multi: any[];

  view: any[] = [600, 400];

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  @Input() user: ActiveUser;
  constructor() {
    Object.assign(this, {single, multi});
  }

  onSelect(event) {
    console.log(event);
  }


  ngOnInit() {
  }

}
