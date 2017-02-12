import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ToastyService, ToastyConfig } from 'ng2-toasty';
import {SpinnerService} from './core/services/spinner.service';
import {NavigationStart, Router} from '@angular/router';

import {TranslateService} from 'ng2-translate';
import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default // Everything else uses OnPush
})
export class AppComponent implements OnInit {

  constructor(translate: TranslateService, toastyConfig: ToastyConfig, private _router: Router, private spinnerService: SpinnerService) {
    // Assign the selected theme name to the `theme` property of the instance of ToastyConfig.
    // Possible values: default, bootstrap, material
    toastyConfig.theme = 'bootstrap';

    // this language will be used as a fallback when a translation isn't found in the current language
    translate.setDefaultLang('en');

    const observ = translate.use(translate.getBrowserLang());
    this.spinnerService.onObservable(observ);

    PageScrollConfig.defaultScrollOffset = 75;
  }

  ngOnInit(): void {
    this._router.events.subscribe((event: any): void => {
      if (event instanceof NavigationStart) {
        this.spinnerService.start.next();
      } else {
        this.spinnerService.end.next();
      }
    });
  }

}
