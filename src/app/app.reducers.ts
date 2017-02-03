import { routerReducer } from '@ngrx/router-store';


import { modalReducer, ModalState } from './core/modal/modal.reducer';

import { RouterState } from '@ngrx/router-store';

export interface AppState {
  modal: ModalState;
  router: RouterState;
}

export const rootReducer = {
  modal: modalReducer,
  router: routerReducer
};

