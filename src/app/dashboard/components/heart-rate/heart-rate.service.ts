import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/share';

// import {BluetoothCore} from '@manekinekko/angular-web-bluetooth';
import {BluetoothCore} from '../../services/bluetooth';

import {SocketIoService} from '../../../core/services/socket-io.service';

export class HrData {
  constructor(public heartRate: number /* 70 */, public contactDetected: boolean,
              public energyExpended: number /* 750kJ */, public rrIntervals: number[] /* [890, 870] */) {}
}

declare var BluetoothUUID: any;

@Injectable()
export class HeartRateService {

  static GATT_PRIMARY_SERVICE =  BluetoothUUID.getService('heart_rate'); // 0x180D;
  static GATT_CHARACTERISTIC_HEART_RATE = 'heart_rate_measurement';  // 0x2A37;
  static GATT_CHARACTERISTIC_SENSOR_LOCATION =  'body_sensor_location';

  deviceName: string;
  gatt: BluetoothRemoteGATTServer;

  connection$() {
    return this.ble
    .discover$({
      filters: [{
        services: [HeartRateService.GATT_PRIMARY_SERVICE],
        namePrefix: 'Polar H7'
      }]
    })
    .do( (gatt: BluetoothRemoteGATTServer) => {
      console.log('ddd');
      this.gatt = gatt;
      this.deviceName = gatt.device.name;
    })
    .share();
  }

  getSensorLocation() {
    return this.ble
      .getPrimaryService$(this.gatt, HeartRateService.GATT_PRIMARY_SERVICE)
      .mergeMap((primaryService: BluetoothRemoteGATTService) =>
        this.ble.getCharacteristic$(primaryService, HeartRateService.GATT_CHARACTERISTIC_SENSOR_LOCATION))
      .mergeMap((char: BluetoothRemoteGATTCharacteristic) => this.ble.observeValue$(char))
      .map((data: DataView) => { return  this.parseBodySensorLocation(data); })
      .share();
  }

  getHeartRate$() {
    return this.ble
      .getPrimaryService$(this.gatt, HeartRateService.GATT_PRIMARY_SERVICE)
      .mergeMap((primaryService: BluetoothRemoteGATTService) =>
        this.ble.getCharacteristic$(primaryService, HeartRateService.GATT_CHARACTERISTIC_HEART_RATE))
      .mergeMap((char: BluetoothRemoteGATTCharacteristic) => this.ble.observeValue$(char))
      .map((data: DataView) => { return  this.parseHeartRate(data); })
      .share();
  }

  constructor(public ble: BluetoothCore, public socket: SocketIoService) {
  }

  parseHeartRate(data): HrData {
    const flags = data.getUint8(0);
    const rate16Bits = flags & 0x1;
    const  result: HrData = new HrData(-1, false, -1, []);

    let index = 1;
    if (rate16Bits) {
      result.heartRate = data.getUint16(index, /*littleEndian=*/true);
      index += 2;
    } else {
      result.heartRate = data.getUint8(index);
      index += 1;
    }
    const contactDetected = flags & 0x2;
    const contactSensorPresent = flags & 0x4;
    if (contactSensorPresent) {
      result.contactDetected = !!contactDetected;
    }
    const energyPresent = flags & 0x8;
    if (energyPresent) {
      result.energyExpended = data.getUint16(index, /*littleEndian=*/true);
      index += 2;
    }
    const rrIntervalPresent = flags & 0x10;
    if (rrIntervalPresent) {
      let rrIntervals = [];
      for (; index + 1 < data.byteLength; index += 2) {
        rrIntervals.push(data.getUint16(index, /*littleEndian=*/true));
      }
      result.rrIntervals = rrIntervals;
    }
    return result;
  }

  parseBodySensorLocation(data: DataView) {
    const sensorLocation = data.getUint8(0);
    switch (sensorLocation) {
      case 0: return 'Other';
      case 1: return 'Chest';
      case 2: return 'Wrist';
      case 3: return 'Finger';
      case 4: return 'Hand';
      case 5: return 'Ear Lobe';
      case 6: return 'Foot';
      default: return 'Unknown';
    }
  }

  // TODO
  resetEnergyExpended() {

  }

}
