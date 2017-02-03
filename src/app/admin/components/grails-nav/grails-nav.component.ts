import {Component} from '@angular/core';
import { GrailsService } from './grails.service';
import {OnInit} from '@angular/core';

@Component({
  selector: 'app-grails-nav',
  templateUrl: './grails-nav.component.html',
  styleUrls: ['./grails-nav.component.scss'],
  providers: [GrailsService]
})
export class GrailsNavComponent implements OnInit {

  applicationData: any;

  constructor(private grailsService: GrailsService) { }

  ngOnInit(): void {
    this.grailsService.getGrailsNavData().subscribe(res => this.applicationData = res);
  }
}
