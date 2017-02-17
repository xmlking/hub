import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import * as io from 'socket.io-client';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {environment} from '../../../environments/environment';

@Injectable()
export class SocketIoService {
  public url = environment.WS_BASE_URL;
  public teamName: string;
  public teamColor: string;
  public socket;

  constructor() {
    console.log('constructeur');
    this.socket = undefined;
  }

  getFences(): Observable<any> {
    const context = this;
    this.socket = io(this.url);
    const observable = new Observable(observer => {
      context.socket.on('init', (data) => {
        observer.next(data);
      });
      return () => {
        console.log('callback error inscription');
      };
    });
    console.log(this.socket);
    return observable;
  }

  closeSocket() {
    this.socket.disconnect();
    this.socket = undefined;
  }

  signUp(teamName: string, teamColor: string): void {
    this.teamColor = teamColor;
    const teamColorValue = teamColor.replace('#', '');
    const response = { pseudo: teamName, colorCode: teamColorValue };
    this.socket.emit('new_client', response);
  }

  setTeamColorTheme(): void {
    const elements = <HTMLCollection>document.getElementsByClassName('toolbar-background');
    for (let i = 0; i < elements.length; i++) {
      (elements[i] as HTMLElement).style.backgroundColor = this.teamColor;
    }
  }

  onFenceEntered(fenceId: string) {
    this.socket.emit('zone_entered', fenceId);
  }

  sendGeneralMessage(message) {
    this.socket.emit('general_message', message);
  }

  getGeneralMessages() {
    return new Observable(observer => {
      this.socket.on('general_message', (data) => {
        observer.next(data);
      });
      return () => {
        console.log('Erreur récéption message general_message');
        this.socket.disconnect();
      };
    });
  }

  sendPrivateMessage(message) {
    this.socket.emit('client_to_masters_message', message);
  }

  getPrivateMessages() {
    return new Observable(observer => {
      this.socket.on('masters_to_client_message', (data) => {
        observer.next(data);
      });
      return () => {
        console.log('Erreur récéption message masters_to_client_message');
        this.socket.disconnect();
      };
    });
  }
}
