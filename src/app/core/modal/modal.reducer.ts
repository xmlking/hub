import {ActionReducer, Action} from '@ngrx/store';
import {ModalActions} from './modal.actions';

export interface ModalState {
  open: boolean;
  cmpName?: string;
}

const initialState: ModalState = {
  open: false
};

export function modalReducer(state = initialState, action: Action): ModalState {
  switch (action.type) {
    case ModalActions.OPENED:
      return Object.assign({}, state, { open: true, cmpName: action.payload });
    case ModalActions.CLOSED:
      return Object.assign({}, state, { open: false, cmpName: null });
    case ModalActions.DISMISSED:
      return Object.assign({}, state, { open: false, cmpName: null });
    default:
      return state;
  }
}
