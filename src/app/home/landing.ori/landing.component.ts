import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  showSpinner$: Observable<boolean>;

  constructor() {
  }

  ngOnInit() {
    this.showSpinner$ = Observable.of(true);
  }

}
