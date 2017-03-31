import {Component, Inject, OnDestroy, OnInit, Renderer} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {routerTransition} from '../app.animations';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class AdminComponent implements OnInit, OnDestroy {

  constructor(@Inject(DOCUMENT) private document: any, private renderer: Renderer) {}

  ngOnInit() {
    this.renderer.setElementClass(this.document.body, 'body-padding-3', true);
  }
  ngOnDestroy(): void {
    this.renderer.setElementClass(this.document.body, 'body-padding-3', false);
  }

}
