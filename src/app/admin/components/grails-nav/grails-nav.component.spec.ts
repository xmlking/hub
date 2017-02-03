/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { GrailsNavComponent } from './grails-nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { GrailsService } from './grails.service';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';

describe('Component: Nav', () => {

  let component: GrailsNavComponent;

  const grailsService = {
    getNavData: () => {
      return Observable.create((observer: Observer<any>) => {
        observer.next({testValue: 3});
        observer.complete();
      });
    }
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NgbModule.forRoot()
      ],
      declarations: [
        GrailsNavComponent
      ],
      providers: [
        {provide: GrailsService, useValue: grailsService}
      ],
    });

    const fixture = TestBed.createComponent(GrailsNavComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('should create the app', async(() => {
    expect(component).toBeTruthy();
  }));

  it('should set applicationData on init', () => {
    component.ngOnInit();
    expect(component.applicationData.testValue).toBe(3);
  });

});
