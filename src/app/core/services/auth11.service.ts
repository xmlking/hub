// import { Injectable, Inject, NgZone , InjectionToken} from '@angular/core';
//
// // libs
// import { Store, ActionReducer, Action } from '@ngrx/store';
// import { Effect, Actions } from '@ngrx/effects';
// import { tokenNotExpired } from 'angular2-jwt';
//
// // app
// // import { Analytics, AnalyticsService } from '../../analytics/index';
// // import { LogService, WindowService } from '../../core/index';
// // import { IUser, UserModel } from '../models/index';
// // import { Tracking } from '../utils/index';
// // import { StorageService } from './storage.service';
//
// const CATEGORY = Tracking.Categories.USERS;
//
// // Auth0 Lock
// export const AUTH_LOCK = new InjectionToken('Auth0Lock');
//
// /**
//  * ngrx start --
//  */
// // export interface IAuthState {
// //   current?: IUser;
// // }
//
// const initialState: IAuthState = {
//   current: null
// };
//
// // interface IAUTH_ACTIONS {
// //   INIT: string;
// //   CHANGE: string;
// //   UPDATED: string;
// //   LOGIN: string;
// //   LOGIN_SUCCESS: string;
// //   LOGIN_FAILED: string;
// //   LOGOUT: string;
// //   REGISTER: string;
// // }
//
// // export const AUTH_ACTIONS: IAUTH_ACTIONS = {
// //   INIT: `${CATEGORY}_INIT`,
// //   CHANGE: `${CATEGORY}_CHANGE`,
// //   UPDATED: `${CATEGORY}_UPDATED`,
// //   LOGIN: `${CATEGORY}_LOGIN`,
// //   LOGIN_SUCCESS: `${CATEGORY}_LOGIN_SUCCESS`,
// //   LOGIN_FAILED: `${CATEGORY}_LOGIN_FAILED`,
// //   LOGOUT: `${CATEGORY}_LOGOUT`,
// //   REGISTER: `${CATEGORY}_REGISTER`
// // };
//
// export const authReducer: ActionReducer<IAuthState> = (state: IAuthState = initialState, action: Action) => {
//   let changeState = () => {
//     return Object.assign({}, state, action.payload);
//   };
//   switch (action.type) {
//     case AUTH_ACTIONS.UPDATED:
//       return changeState();
//     default:
//       return state;
//   }
// };
// /**
//  * ngrx end --
//  */
//
// @Injectable()
// export class AuthService extends Analytics {
//   // Auth0
//   private lock: any;
//
//   constructor(public analytics: AnalyticsService, private store: Store<any>,
//               private storage: StorageService, private log: LogService,
//               @Inject(AUTH_LOCK) private authLock: any, private win: WindowService, private ngZone: NgZone) {
//     super(analytics);
//     this.category = Tracking.Categories.USERS;
//
//     // config Auth0
//     this.lock = new authLock('r96lh3DyVfFMGdyAgrZTSsO8y8bX7eY4', 'progress.auth0.com', {});
//
//     // Add callback for lock `authenticated` event
//     this.lock.on('authenticated', (authResult: any) => {
//       this.log.debug('authenticated');
//       // this.log.debug(authResult);
//
//       // Fetch profile information
//       this.lock.getProfile(authResult.idToken, (error, profile) => {
//         if (error) {
//           // Handle error
//           this.win.alert(error);
//           return;
//         }
//
//         profile.authIdToken = authResult.idToken;
//         this.ngZone.run(() => {
//           this.store.dispatch({ type: AUTH_ACTIONS.LOGIN_SUCCESS, payload: profile });
//         });
//       });
//     });
//
//     this.store.dispatch({ type: AUTH_ACTIONS.INIT });
//   }
//
//   public login() {
//     // Call the show method to display the widget.
//     this.lock.show((error: string, profile: Object, id_token: string) => {
//       this.log.debug('lock.show');
//       this.log.debug(error);
//       if (error) {
//         console.log(error);
//       }
//       this.log.debug(profile);
//       this.log.debug(id_token);
//     });
//   }
//
//   public authenticated() {
//     // Check if there's an unexpired JWT
//     return tokenNotExpired();
//   }
//
//   public loginSuccess(user: any) {
//     this.track(Tracking.Actions.LOGGED_IN, { label: user.email });
//     this.store.dispatch({ type: AUTH_ACTIONS.CHANGE, payload: user });
//   }
//
//   public set current(user: IUser) {
//     if (user) {
//       // this.http.authToken = user.auth_token;
//       this.log.debug(user);
//       // persist to storage
//       this.storage.setItem(StorageService.KEYS.USER, user);
//       // this.storage.setItem(StorageService.KEYS.RECENT_USERNAME, user.email);
//     } else {
//       // clear storage
//       this.storage.removeItem(StorageService.KEYS.USER);
//     }
//   }
//
//   public get current(): IUser {
//     let auth = this.authenticated();
//     this.log.debug(`Current User token valid? ${auth}`);
//     let value = this.storage.getItem(StorageService.KEYS.USER);
//     this.log.debug(`Current User stored:`);
//     this.log.debug(value);
//     if (value) {
//       return new UserModel(value);
//     }
//     return null;
//   }
// }
//
// @Injectable()
// export class AuthEffects {
//
//   @Effect() init$ = this.actions$
//     .ofType(AUTH_ACTIONS.INIT)
//     .map(action => {
//       this.log.debug(AUTH_ACTIONS.INIT);
//       let savedUser = this.authService.current;
//       return ({ type: AUTH_ACTIONS.CHANGE, payload: savedUser });
//     });
//
//   @Effect({ dispatch: false }) login$ = this.actions$
//     .ofType(AUTH_ACTIONS.LOGIN)
//     .do(action => {
//       this.authService.login();
//     });
//
//   @Effect({ dispatch: false }) loginSuccess$ = this.actions$
//     .ofType(AUTH_ACTIONS.LOGIN_SUCCESS)
//     .do(action => this.authService.loginSuccess(action.payload));
//
//   // @Effect({dispatch: false}) loginFailed$ = this.actions$
//   //   .ofType(AUTH_ACTIONS.LOGIN_FAILED)
//   //   .do(action => this.authService.loginFailed());
//
//   @Effect() authChange$ = this.actions$
//     .ofType(AUTH_ACTIONS.CHANGE)
//     .map(action => {
//       this.log.debug(AUTH_ACTIONS.CHANGE);
//       // persist user changes
//       this.authService.current = action.payload;
//       return ({ type: AUTH_ACTIONS.UPDATED, payload: { current: action.payload } });
//     });
//
//   @Effect() logout$ = this.actions$
//     .ofType(AUTH_ACTIONS.LOGOUT)
//     .map(action => {
//       this.log.debug(AUTH_ACTIONS.LOGOUT);
//       // analytics
//       let label = this.authService.current ? this.authService.current.email : 'Unavailable';
//       this.authService.track(Tracking.Actions.LOGGED_OUT, { label });
//       return ({ type: AUTH_ACTIONS.CHANGE, payload: null });
//     });
//
//   constructor(private store: Store<any>, private log: LogService, private actions$: Actions, private win: WindowService, private authService: AuthService) { }
// }
