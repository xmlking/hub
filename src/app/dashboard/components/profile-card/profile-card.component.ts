import {Component, Input, OnInit} from '@angular/core';
import { AccountService } from '../../../core/services/account.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {
  lastUpdated: Date;
  action = 'BMI';
  selectedAccount: string;

  constructor(private router: Router, private accountService: AccountService) {
  }

  ngOnInit() {
    this.selectedAccount = this.accountService.account;
    this.lastUpdated = new Date();
  }






}
