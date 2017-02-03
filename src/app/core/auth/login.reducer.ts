import { Action } from '@ngrx/store';

import { LoginActions } from './login.actions';
import {User} from './user.model';


export interface UserState {
  user: User;
  readonly id_token: string;
  isLoggedIn: boolean;
  error?: any;
}

const initialState: UserState = {
  user: { name: 'Orange User', address: 'zzz' },
  id_token: null,
  isLoggedIn: false,
  error: undefined
};

export function loginReducer(state = initialState, action: Action): UserState {
  /* tslint:disable: no-switch-case-fall-through */
  switch (action.type) {

    case LoginActions.LOGIN: {
      return state;
    }

    case LoginActions.LOGOUT: {
      return state;
    }

    case LoginActions.LOGIN_SUCCESS: {
      return {
        user: action.payload,
        id_token: 'ddd',
        isLoggedIn: true
      };
    }

    case LoginActions.LOGIN_FAIL: {
      return state;
    }

    case LoginActions.LOGOUT_SUCCESS: {
      return state;
    }

    case LoginActions.LOGOUT_FAIL: {
      return state;
    }

    default: {
      return state;
    }
  }
}

