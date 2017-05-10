import {Component, Inject, OnDestroy, OnInit, Renderer} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {MaterialService} from './material.service';
import {ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  providers: [MaterialService]
})
export class MaterialComponent implements OnInit, OnDestroy {

  rows = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];
  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer,
    private toastyService: ToastyService) {
    this.fetch((data) => {
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  ngOnInit() {
    this.renderer.setElementClass(this.document.body, 'body-padding-3', true);
    // this.setPage({ offset: 0 });
  }
  ngOnDestroy(): void {
    this.renderer.setElementClass(this.document.body, 'body-padding-3', false);
  }

  fetch(cb) {
    const req = new XMLHttpRequest();
    req.open('GET', `assets/data/company.json`);

    req.onload = () => {
      cb(JSON.parse(req.response));
    };

    req.send();
  }

  showMessage() {
    this.toastyService.info('my style is material');
  }
  // setPage(pageInfo) {
  //   this.page.pageNumber = pageInfo.offset;
  //   this.mockDataService.getResults(this.page).subscribe(pagedData => {
  //     this.page = pagedData.page;
  //     this.rows = pagedData.data;
  //   });
  // }
}
