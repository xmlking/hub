import { AccountService } from './account.service';
import {AuthService} from './auth.service';
import { VitalSignsService } from './vital-signs.service';
import {SpinnerService} from './spinner.service';
import {SocketIoService} from './socket-io.service';

export const Services = [
  AuthService,
  AccountService,
  VitalSignsService,
  SpinnerService,
  SocketIoService,
];
