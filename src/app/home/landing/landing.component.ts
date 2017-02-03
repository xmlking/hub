import {Component, Inject, OnDestroy, OnInit, ViewEncapsulation} from '@angular/core';
import {DOCUMENT, Title} from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

  showSpinner$: Observable<boolean>;

  constructor(@Inject(DOCUMENT) private document: Document, private titleService: Title ) {
  }

  ngOnInit() {
    this.showSpinner$ = Observable.of(true);
    this.titleService.setTitle('Landing Page');
    // this.document.body.classList.add('fixed');
    // this.document.body.classList.remove('fixed');
    console.log(document.body.getAttribute('style'));
    // document.body.setAttribute('style', 'padding-top: 0; padding-bottom: 0; width: 100%; height: 100%;' +
    //   'background-color: #282828; color: #d3d3d3; webkit-tap-highlight-color: #222;' +
    //   'font-family: "Questrial","Helvetica Neue",Arial,sans-serif;');

    // document.setAttribute('style', 'padding-top: 0; padding-bottom: 0;height: 100%;');
    document.body.setAttribute('style', 'padding-top: 0; padding-bottom: 0;height: 100%;');
  }

  ngOnDestroy(): void {
    document.body.setAttribute('style', 'padding-top: 3rem;padding-bottom: 3rem;color: #5a5a5a;');
  }

}


