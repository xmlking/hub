import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ToastyService, ToastyConfig } from 'ng2-toasty';
import {SpinnerService} from './core/services/spinner.service';
import {NavigationStart, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default // Everything else uses OnPush
})
export class AppComponent implements OnInit {

  constructor( private toastyConfig: ToastyConfig, private _router: Router, private spinnerService: SpinnerService) {
    // Assign the selected theme name to the `theme` property of the instance of ToastyConfig.
    // Possible values: default, bootstrap, material
    this.toastyConfig.theme = 'bootstrap';
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
