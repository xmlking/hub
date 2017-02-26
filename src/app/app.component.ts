import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ToastyService, ToastyConfig } from 'ng2-toasty';
import {SpinnerService} from './core/services/spinner.service';
import {NavigationStart, Router} from '@angular/router';

import { TranslateService } from '@ngx-translate/core';
import {PageScrollConfig} from 'ng2-page-scroll';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default // Everything else uses OnPush
})
export class AppComponent implements OnInit {
  public language: string;
  constructor(translate: TranslateService, toastyConfig: ToastyConfig, private _router: Router, private spinnerService: SpinnerService) {
    // Assign the selected theme name to the `theme` property of the instance of ToastyConfig.
    // Possible values: default, bootstrap, material
    toastyConfig.theme = 'bootstrap';

    this.language = translate.getBrowserLang();
    // translate.addLangs(["en", "fr"]);
    translate.setDefaultLang('en'); // fallback

    const observ = translate.use(this.language.match(/en|es|fr|ru/) ? this.language : 'en');

    // // subscribe to changes
    // store.select('i18n').subscribe((state: IMultilingualState) => {
    //   // update ng2-translate which will cause translations to occur wherever the TranslatePipe is used in the view
    //   this.translate.use(state.lang);
    // });

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
