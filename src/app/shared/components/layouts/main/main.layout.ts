import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main.layout.html',
  styleUrls: ['./main.layout.scss']
})
export class MainLayout implements OnInit {

  constructor() {}

  ngOnInit() {
    console.log('MainLayout....');
  }

}
