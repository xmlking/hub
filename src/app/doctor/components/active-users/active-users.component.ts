import { Component, OnInit } from '@angular/core';

const USERS = [
  {id: 1, name: 'Superman'},
  {id: 2, name: 'Batman'},
  {id: 5, name: 'BatGirl'},
  {id: 3, name: 'Robin'},
  {id: 4, name: 'Flash'}
];

interface ActiveUser {
  id: number;
  name: string;
}

@Component({
  selector: 'app-active-users',
  templateUrl: 'active-users.component.html',
  styleUrls: ['active-users.component.scss']
})
export class ActiveUsersComponent implements OnInit {


  users: ActiveUser[] ;
  selectedUser: ActiveUser;
  constructor() { }

  ngOnInit() {
    this.users = USERS;
    this.selectedUser = USERS[2];
  }

  setCurrentUser(user: ActiveUser) {
    this.selectedUser = user;
  }

}
