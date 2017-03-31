import {Component, Inject, Renderer, OnDestroy, OnInit} from '@angular/core';
import {DOCUMENT, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private document: any, private renderer: Renderer) {}

  ngOnInit() {
    this.renderer.setElementClass(this.document.documentElement, 'landing-html-class', true);
    this.renderer.setElementClass(this.document.body, 'landing-body-class', true);
  }
  ngOnDestroy(): void {
    this.renderer.setElementClass(this.document.documentElement, 'landing-html-class', false);
    this.renderer.setElementClass(this.document.body, 'landing-body-class', false);
  }
}
