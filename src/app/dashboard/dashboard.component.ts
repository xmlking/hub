import {Component, Inject, OnDestroy, OnInit, Renderer} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent implements OnInit, OnDestroy {

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer) {}

  ngOnInit() {
    this.renderer.setElementClass(this.document.body, 'body-padding-3', true);
  }
  ngOnDestroy(): void {
    this.renderer.setElementClass(this.document.body, 'body-padding-3', false);
  }

}
