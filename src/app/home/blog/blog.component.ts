import {Component, Inject, OnDestroy, OnInit, Renderer, ViewEncapsulation} from '@angular/core';
import {DOCUMENT, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any, private renderer: Renderer, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Blog Page');
  }


  changeNav(inView) {
    const topNav = this.document.getElementById('topNav');
    this.renderer.setElementClass(topNav, 'affix', !inView);
  }
}
