import { Component, OnInit, OnDestroy } from '@angular/core';
import { VitalSignsService } from '../../../core/services/vital-signs.service';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-leader-board',
  templateUrl: './leader-board.component.html',
  styleUrls: ['./leader-board.component.scss']
})
export class LeaderBoardComponent implements OnInit {

  leaderBoard = [];

  constructor(private vitalSignsService: VitalSignsService) {
  }

  ngOnInit() {
    this.leaderBoard = this.vitalSignsService.getAllAccounts();
  }
}





