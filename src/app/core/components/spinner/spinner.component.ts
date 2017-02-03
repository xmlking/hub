import {Component, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import {SpinnerService} from '../../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements AfterViewInit {
  @ViewChild('app-spinner') el: ElementRef;
  private isVisible: boolean;

  constructor(private Spinner: SpinnerService) {
    this.isVisible = true;
  }

  ngAfterViewInit() {
    this.Spinner.start
      .subscribe(() => this.isVisible = true);


    this.Spinner.end
      .subscribe(() => this.isVisible = false);
  }

}
