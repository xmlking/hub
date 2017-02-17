
import { Component, OnInit, NgZone } from '@angular/core';
import { BatteryLevelService } from './battery-level.service';
// import { BluetoothCore } from '@manekinekko/angular-web-bluetooth';
import {BluetoothCore} from '../../services/bluetooth';

@Component({
  selector: 'app-battery-level',
  templateUrl: './battery-level.component.html',
  styleUrls: ['./battery-level.component.scss'],
  providers: [ BatteryLevelService, BluetoothCore ]
})
export class BatteryLevelComponent implements OnInit {

  batteryLevel = '--';
  device: any = {};

  constructor(
    public _zone: NgZone,
    public _batteryLevelService: BatteryLevelService
  ) {}

  ngOnInit() {
    this.getDeviceStatus();
    // this.streamValues();
  }

  streamValues() {
    this._batteryLevelService.streamValues()
      .subscribe((value) => this.showBatteryLevel(value));
  }

  getDeviceStatus() {
    this._batteryLevelService.getDevice().subscribe(
      (device) => {

        if (device) {
          this.device = device;
        } else {
          // device not connected or disconnected
          this.device = null;
          this.batteryLevel = '--';
        }
      }
    );
  }

  getFakeValue() {
    this._batteryLevelService.getFakeValue();
  }

  getBatteryLevel() {
    return this._batteryLevelService.getBatteryLevel()
      .subscribe((value) => this.showBatteryLevel(value));
  }

  private showBatteryLevel(value: number) {
    // force change detection
    this._zone.run( () =>  {
      console.log('Reading battery level %d', value);
      this.batteryLevel = '' + value;
    });
  }

}
