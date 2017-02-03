import {Component, OnInit, OnDestroy} from '@angular/core';
import { VitalSignsService } from '../../../core/services/vital-signs.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {NewBalance} from '../../../core/services/vital-signs.service';

@Component({
  selector: 'app-balance-history',
  templateUrl: './balance-history.component.html',
  styleUrls: ['./balance-history.component.scss']
})
export class BalanceHistoryComponent implements OnInit, OnDestroy {

  balanceHistory = new Array<NewBalance>();
  private sub: Subscription;

  constructor(private vitalSignsService: VitalSignsService) { }

  ngOnInit() {
    this.sub = this.vitalSignsService.newBalance$
      .subscribe((event) => {
        this.balanceHistory.unshift(event);
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
