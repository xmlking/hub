import {
  Component, OnInit, OnDestroy, NgZone, ViewChild, Renderer, ElementRef, AfterViewInit,
  OnChanges, Input
} from '@angular/core';
import { HeartRateService, HrData } from '../heart-rate.service';
import {ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-heart-rate-display',
  templateUrl: 'heart-rate-display.component.html',
  styleUrls: ['heart-rate-display.component.scss'],
  providers: [ HeartRateService ]
})
export class HeartRateDisplayComponent implements AfterViewInit, OnChanges {
  @Input() public hrData: HrData;
  @ViewChild('heart') heart: ElementRef;
  constructor(
    private toastyService: ToastyService,
    private renderer: Renderer,
  ) {}

  ngAfterViewInit() {
    this.renderer.setElementClass(this.heart.nativeElement, 'animate-heartbeat', true);
  }

  colorHeart() {
    if (this.hrData) {
      if (this.hrData.heartRate > 120) {
        this.toastyService.error('Heart Rate is too high, Alert message is sent to provider');
        this.renderer.setElementStyle(this.heart.nativeElement, 'color', '#d63230');
      } else if (this.hrData.heartRate > 100) {
        this.toastyService.wait('Heart Rate is high, Please try to relax');
        this.renderer.setElementStyle(this.heart.nativeElement, 'color', '#ff4136');
      } else if (this.hrData.heartRate > 90) {
        this.toastyService.info('Heart Rate above normal, Please try to relax');
        this.renderer.setElementStyle(this.heart.nativeElement, 'color', '#ff6f69');
      } else if (this.hrData.heartRate > 80) {
        this.renderer.setElementStyle(this.heart.nativeElement, 'color', '#ff6f69');
      } else {
        this.renderer.setElementStyle(this.heart.nativeElement, 'color', '#008000');
      }
    }
  }

  ngOnChanges(data) {
    console.log('data', data);
    this.colorHeart();
  }
}
