import {Component, Inject, OnDestroy, OnInit, Renderer} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import * as Rx from 'rxjs/Rx';
import { ActiveUsersService } from './services/active-users.service';
import {Observable} from 'rxjs/Observable';
import {ActiveUser} from "./models/active-user";

function getRandomNumber(bottom, top): number {
  return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}
function getRandomDelay(bottom, top): number {
  return Math.floor( Math.random() * ( 1 + top - bottom ) ) + bottom;
}



@Component({
  selector: 'app-doctor',
  templateUrl: 'doctor.component.html',
  styleUrls: ['doctor.component.scss']
})
export class DoctorComponent implements OnInit, OnDestroy {
  ob = new Rx.Observable<number>(sub => {
  let timeout = null;

  // recursively send a random number to the subscriber
  // after a random delay
  (function push() {
    timeout = setTimeout(
      () => {
        sub.next(getRandomNumber(55, 152));
        push();
      },
      getRandomDelay(1000, 5000)
    );
  })();

  // clear any pending timeout on teardown
  return () => clearTimeout(timeout);
  });
  random1: number;
  random2: number;
  random3: number;
  random4: number;
  sub1: Rx.Subscription;
  sub2: Rx.Subscription;
  sub3: Rx.Subscription;
  sub4: Rx.Subscription;
  currentUser: ActiveUser;
  activeUsers$: Observable<ActiveUser[]>;
  constructor(@Inject(DOCUMENT) private document: any, private renderer: Renderer,
              private activeUsersService: ActiveUsersService) {
    this.sub1 = this.ob.subscribe((x) => { this.random1 = x; });
    this.sub2 = this.ob.subscribe((x) => { this.random2 = x; });
    this.sub3 = this.ob.subscribe((x) => { this.random3 = x; });
    this.sub4 = this.ob.subscribe((x) => { this.random4 = x; });
  }

  ngOnInit() {
    this.renderer.setElementClass(this.document.body, 'body-padding-3', true);
    this.getActiveUsers();
  }
  ngOnDestroy(): void {
    this.renderer.setElementClass(this.document.body, 'body-padding-3', false);
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    this.sub4.unsubscribe();
  }

  getActiveUsers() {
    this.activeUsers$ = this.activeUsersService.list();
  }

  deleteUser(user: ActiveUser) {
    this.activeUsersService.delete(user.id)
      .then(() => {
        console.log('deleted: ', user);
        this.getActiveUsers();
      });
  };

  setCurrentUser(user: ActiveUser) {
    this.currentUser = user;
  };

}
