import {Component, Inject, OnDestroy, OnInit, Renderer, ViewEncapsulation} from '@angular/core';
import {DOCUMENT, Title} from '@angular/platform-browser';


@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any, private renderer: Renderer, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('About Page');
  }


  changeNav(inView) {
    const topNav = this.document.getElementById('topNav');
    this.renderer.setElementClass(topNav, 'affix', !inView);
  }

}
