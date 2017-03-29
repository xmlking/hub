import { trigger, state, animate, style, transition, keyframes } from '@angular/animations';

export function routerTransition() {
  return trigger('routerTransition', [
    state('void',
      style({
        position: 'absolute',
        width: '75%',
        height: '75%',
        left: '0',
        right: '0',
        margin: '0 auto',
        top: '12.5%'
      })),
    state('*',
      style({
        position: 'absolute',
        width: '75%',
        height: '75%',
        left: '0',
        right: '0',
        margin: '0 auto',
        top: '12.5%'
      })),
    transition(':enter', [
      style({transform: 'scale(0)'}),
      animate('.5s ease-in-out', style({transform: 'scale(1)'}))
    ]),
    transition(':leave', [
      style({transform: 'scale(1)'}),
      animate('.5s ease-in-out', style({transform: 'scale(0)'}))
    ])
  ]);
}
export function arcadeTransition() {
  return trigger('routerTransition', [
    state('void',
      style({
        position: 'absolute',
        width: '90%',
        height: '90%',
        left: '0',
        right: '0',
        margin: '0 auto',
        top: '5%'
      })),
    state('*',
      style({
        position: 'absolute',
        width: '90%',
        height: '90%',
        left: '0',
        right: '0',
        margin: '0 auto',
        top: '5%'
      })),
    transition(':enter', [
      style({transform: 'scale(0)'}),
      animate('2s ease-in-out', style({transform: 'scale(1)'}))
    ]),
    transition(':leave', [
      style({transform: 'scale(1)'}),
      animate('1s ease-in-out', style({transform: 'scale(0)'}))
    ])
  ]);
}


export function flyInOutTransition() {
  return trigger('flyInOut', [
    transition('outLeft => outRight, outLeftAgain => outRight, outRight => outRightAgain, outRightAgain => outRight', [
      animate('300ms ease-in', keyframes([
        style({transform: 'translateX(100%)',  offset: 0.5}),
        style({transform: 'translateX(-100%)', offset: 0.5}),
        style({transform: 'translateX(0)',     offset: 1.0})
      ]))
    ])
  ]);
}

export function outRightTransition() {
  return trigger('flyInOut', [
    transition('outRight => outLeft, outRightAgain => outLeft, outLeft => outLeftAgain, outLeftAgain => outLeft', [
      animate('300ms ease-in', keyframes([
        style({transform: 'translateX(-100%)',  offset: 0.5}),
        style({transform: 'translateX(100%)', offset: 0.5}),
        style({transform: 'translateX(0)',     offset: 1.0})
      ]))
    ])
  ]);
}
