import {
  Component, OnInit, OnDestroy, NgZone, ViewChild, Renderer, ElementRef, AfterViewInit} from '@angular/core';
import { HeartRateService, HrData } from './heart-rate.service';
import { BluetoothCore } from '@manekinekko/angular-web-bluetooth';
import {Observable} from 'rxjs/Observable';
import {ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-heart-rate',
  templateUrl: './heart-rate.component.html',
  styleUrls: ['./heart-rate.component.scss'],
  providers: [ HeartRateService, BluetoothCore ]
})
export class HeartRateComponent implements OnInit, OnDestroy, AfterViewInit {

  deviceName: string;
  heartRate = 0;
  public connected = false;
  public hrDataStream: Observable<HrData>;
  @ViewChild('heart') heart: ElementRef;
  constructor(
    private toastyService: ToastyService,
    private renderer: Renderer,
    public zone: NgZone,
    public heartRateService: HeartRateService
  ) {}

  ngAfterViewInit() {
  }

  ngOnInit() {
  }

  private start() {
    this.toastyService.info('a window will pop-up. Select your HR device');
    this.heartRateService.connection$().first().subscribe(
      (device) => {
        if (device) {
          console.log('App: device Connected', device );
          this.deviceName = this.heartRateService.deviceName;
          this.onConnect();
        } else {
          // device not connected or disconnected
          this.onDisconnect();
        }
      },
      (err) => {
        console.log('App Error: Bluetooth', err);
        this.onDisconnect();
      });
  }

  private stop() {
    this.connected = false;
  }

  private onConnect() {
    this.zone.run(() => {
      this.connected = true;
      this.hrDataStream = this.heartRateService.getHeartRate$();
    });
  }

  private onDisconnect() {
      this.connected = false;
  }

  ngOnDestroy(): void {
    this.stop();
  }

  public toggle() {
    if (this.connected) {
      this.stop();
    } else {
      this.start();
    }
  }
}
