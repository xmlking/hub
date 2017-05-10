import {Component, OnInit} from '@angular/core';
import {MaterialService} from './material.service';
import {ToastyService} from 'ng2-toasty';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  providers: [MaterialService]
})
export class MaterialComponent implements OnInit {

  rows = [];
  loadingIndicator = true;
  reorderable = true;

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

  constructor(private toastyService: ToastyService) {
    this.fetch((data) => {
      this.rows = data;
      setTimeout(() => { this.loadingIndicator = false; }, 1500);
    });
  }

  ngOnInit() {
    // this.setPage({ offset: 0 });
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
