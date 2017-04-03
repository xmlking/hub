import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ActiveUser} from "../../models/active-user";

@Component({
  selector: 'app-active-users',
  templateUrl: 'active-users.component.html',
  styleUrls: ['active-users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActiveUsersComponent implements OnInit {

  @Input() activeUsers:  ActiveUser[];
  @Output() _select: EventEmitter<any> = new EventEmitter();
  @Output() _delete: EventEmitter<any> = new EventEmitter();
  selectedUser: ActiveUser;
  constructor() { }

  ngOnInit() {
  }

  onSelect(user: ActiveUser) {
    this.selectedUser = user;
    this._select.emit(user);
  }

  onDelete(user: ActiveUser) {
    this.selectedUser = undefined;
    this._delete.emit(user);
  }

}
