import {Component, Input, ElementRef, OnInit, OnChanges,
  ChangeDetectorRef, ChangeDetectionStrategy, NgZone} from '@angular/core';
import {ReplaySubject} from 'rxjs/Rx';
import {TimeSeries, SmoothieChart, IChartOptions, ITimeSeriesPresentationOptions} from 'smoothie';

@Component({
  selector: 'app-smoothie-chart',
  templateUrl: './smoothie-chart.component.html',
  styleUrls: ['./smoothie-chart.component.scss']
})
export class SmoothieChartComponent implements OnInit, OnChanges {

  static defaultPresentationOptions = {
    strokeStyle: 'rgb(0, 255, 0)',
    fillStyle: 'rgba(0, 255, 0, 0.4)',
    lineWidth: 3
  };

  static defaultChartOptions = {
    minValue: 50.0,
    maxValue: 150.0,
    grid: {
      strokeStyle: 'rgb(125, 0, 0)',
      fillStyle: 'rgb(60, 0, 0)',
      lineWidth: 1,
      millisPerLine: 1000,
      verticalSections: 4
    }
  };

  @Input() id: string;
  @Input() width: number;
  @Input() height: number;
  @Input() incomingData: Array<string>;
  @Input() public presentationOptions: ITimeSeriesPresentationOptions;
  @Input() public chartOptions: IChartOptions;
  chart: any;
  sineLine: any;

  constructor(private element: ElementRef, private ngZone: NgZone) {
  }

  ngOnInit() {
    if (!this.presentationOptions) {
      this.presentationOptions = SmoothieChartComponent.defaultPresentationOptions;
    } else {
      this.presentationOptions = Object.assign(SmoothieChartComponent.defaultPresentationOptions, this.presentationOptions);
    }
    if (!this.chartOptions) {
      this.chartOptions = SmoothieChartComponent.defaultPresentationOptions;
    } else {
      this.chartOptions = Object.assign(SmoothieChartComponent.defaultChartOptions, this.chartOptions);
    }

    this.chart = new SmoothieChart(this.chartOptions);
    this.sineLine = new TimeSeries();
    this.chart.addTimeSeries(this.sineLine, this.presentationOptions);
    this.chart.streamTo(this.element.nativeElement.getElementsByTagName('canvas')[0]);
  }

  ngOnChanges(data) {
    if (this.sineLine && data && data.incomingData) {
      if (data.incomingData.currentValue) {
        this.sineLine.append(new Date().getTime(), data.incomingData.currentValue);
      }
    }
  }
}
