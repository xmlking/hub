import { Injectable } from '@angular/core';
import { BrowserWebBluetooth } from '@manekinekko/angular-web-bluetooth';

@Injectable()
export class BluetoothService {

  public _ble: any;

  constructor() {
    this._ble = navigator.bluetooth;
    if ( !this._ble ) {
      console.error('Your browser does not support Smart Bluetooth. See http://caniuse.com/#search=Bluetooth for more details.');
    }
  }

  requestDevice(options: RequestDeviceOptions): Promise<BluetoothDevice> {
    return this._ble.requestDevice(options);
  }

}
