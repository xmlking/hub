import {Injectable} from '@angular/core';
import {NgbModalRef, NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {Store} from '@ngrx/store';
import {ModalActions} from './modal.actions';
import {ModalOptions} from './modal-options.modal';
import {NavigationStart, Router} from '@angular/router';
import 'rxjs/add/operator/filter';

@Injectable()
export class ModalService {

  private _modalRef: NgbModalRef;

  constructor(private store: Store<any>, private modalActions: ModalActions, private modal: NgbModal, private router: Router) {

    router.events
      .filter(event => this._modalRef !== undefined && event instanceof NavigationStart)
      .subscribe((e) => {
        this.store.dispatch(this.modalActions.close('Navigating Away'));
    });
  }

  public get modalRef(): NgbModalRef {
    return this._modalRef;
  }

  public open(options: ModalOptions) {

    this._modalRef = this.modal.open(options.cmpType, options.modalOptions);
    if (options.props) {
      for (const key in options.props) {
        if (options.props.hasOwnProperty(key)) {
          this._modalRef.componentInstance[key] = options.props[key];
        }
      }
    }

    this._modalRef.result
      .then(result  => this.store.dispatch(this.modalActions.closed(result)))
      .catch(reason => this.store.dispatch(this.modalActions.dismissed(reason)))
      .then(() => this._modalRef = undefined );

    this.store.dispatch(this.modalActions.opened(options.cmpType.name));
  }

  public close(reason?: string) {
    if (this._modalRef) {
      this._modalRef.close(reason);
    }
  }

  public dismiss(reason?: string | ModalDismissReasons) {
    if (this._modalRef) {
      this._modalRef.dismiss(reason);
    }
  }

}
