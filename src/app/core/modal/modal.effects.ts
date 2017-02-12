import {Injectable} from '@angular/core';
import {Effect, Actions} from '@ngrx/effects';
import {ModalActions} from './modal.actions';
import {Store} from '@ngrx/store';
import {ModalService} from './modal.service';
import 'rxjs/add/operator/do';

@Injectable()
export class ModalEffects {

  /**
   * This effect does not yield any actions back to the store. Set
   * `dispatch` to false to hint to @ngrx/effects that it should
   * ignore any elements of this effect stream.
   */
  @Effect({dispatch: false})
  open$ = this.actions$
    .ofType(ModalActions.OPEN)
    .do(action => this.modalService.open(action.payload));

  @Effect({dispatch: false})
  close$ = this.actions$
    .ofType(ModalActions.CLOSE)
    .do(action => this.modalService.close(action.payload));


  @Effect({dispatch: false})
  dismiss$ = this.actions$
    .ofType(ModalActions.DISMISS)
    .do(action => this.modalService.dismiss(action.payload));

  constructor(private store: Store<any>, private actions$: Actions, private modalService: ModalService) { }
}
