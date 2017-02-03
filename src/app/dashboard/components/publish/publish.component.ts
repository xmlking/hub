import {Component, Input, OnInit, EventEmitter, Output, OnDestroy} from '@angular/core';
import {ToastyService, ToastOptions, ToastData} from 'ng2-toasty';
import { VitalSignsService } from '../../../core/services/vital-signs.service';
import {FormControl, Validators} from '@angular/forms';
import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'app-publish',
  templateUrl: './publish.component.html',
  styleUrls: ['./publish.component.scss']
})
export class PublishComponent implements OnInit, OnDestroy{

  steps = new FormControl('', Validators.required);
  gymVisits = new FormControl('', Validators.required);
  bmi = new FormControl('', [Validators.required]);


  constructor(private toastyService: ToastyService, private vitalSignsService: VitalSignsService) {
  }

  ngOnInit() {
  }


  ngOnDestroy(): void {
  }

  addSteps() {
    this.vitalSignsService.addSteps(this.steps.value)
      .subscribe(this.createObserver());
  }

  addGymVisits() {
    this.vitalSignsService.addGymVisits(this.gymVisits.value)
      .subscribe(this.createObserver());
  }

  setBMI() {
    this.vitalSignsService.setBMI(this.bmi.value)
      .subscribe(this.createObserver());
  }

  private createObserver<T>(): Observer<T> {
    return {
      next: (result) => {
        // this.toastyService.success(`Hi there, good news - addSteps(${this.steps.value})`);
      },
      error: (error) => {
        this.toastyService.error(`Hi there, bad news\n ${error.message}`);
      },
      complete: () => {
        this.toastyService.wait({
          title: 'Submitted!',
          msg: `balance will be update soon`
        });
      }
    };
}

}
