import {Component, Input, OnInit} from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder} from '@angular/forms';

import {AccountService} from '../../../core/services/account.service';
import {ToastyService} from 'ng2-toasty';


@Component({
  selector: 'app-fund',
  templateUrl: './fund.component.html',
  styleUrls: ['./fund.component.scss']
})
export class FundComponent implements OnInit {
  accounts = [];
  sendEtherForm: FormGroup;

  constructor(private fb: FormBuilder, private toastyService: ToastyService, private accountService: AccountService) {

    this.accounts = [{a: 'sumo1', b: 'demo1', c: 444}, {a: 'sumo2', b: 'demo2', c: 555}, {a: 'sumo3', b: 'demo3', c: 666}];
  }

  ngOnInit() {
    this.sendEtherForm = this.fb.group({
      recipientAddress: ['', [Validators.required, Validators.minLength(20)]],
      sendAmount: ['', Validators.required],
    });
  }

  getAccountBalance(account): number {
    return account.c;
  }

  send(toAccount: string,  amount = 6, fromAddress: string = this.accounts[0]) {
    console.log(`toAccount: ${toAccount}, fromAddress: ${fromAddress}, amount: ${amount}`);
    this.accountService.transfer(toAccount, fromAddress, amount)
      .subscribe(
        result => this.toastyService.warning('Transfer Initiated'),
        error => this.toastyService.error(`Hi there, bad news\n ${error.message}`),
        () => true // this.toastyService.info("Hi there, good news, done ")
      );
  }

}
