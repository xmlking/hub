import {Component, Inject, OnDestroy, OnInit, Renderer, ViewChild, ViewEncapsulation} from '@angular/core';
import {DOCUMENT, Title} from '@angular/platform-browser';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

  // @ViewChild('topNav') topNav: ElementRef;
  isVideoCollapsed: boolean;

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Landing Page');
    this.isVideoCollapsed = true;
  }


  ngOnDestroy(): void {
  }

  changeNav(inView) {
    const topNav = this.document.getElementById('topNav');
    this.renderer.setElementClass(topNav, 'affix', !inView);
  }
}


