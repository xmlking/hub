import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-back-button',
  templateUrl: './back-button.component.html',
  styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {
  private location: Location;

  constructor(locationService: Location) {
    this.location = locationService;
  }

  goBack() {
    this.location.back();
  }
}
