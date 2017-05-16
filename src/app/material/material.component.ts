import {Component, ChangeDetectorRef, Inject, OnDestroy, OnInit, Renderer} from '@angular/core';
import {DOCUMENT} from '@angular/platform-browser';
import {Observable} from 'rxjs/Observable';
import {MaterialService} from './services/material.service';
import {ToastyService} from 'ng2-toasty';
import {Account} from './models/account';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.scss'],
  providers: [MaterialService]
})
export class MaterialComponent implements OnInit, OnDestroy {

  rows$: Observable<Account[]>;
  loadingIndicator = true;
  selected = [];
  editing = {};

  columns = [
    { name: 'Name' },
    { name: 'Gender', prop: 'gender' },
    { name: 'Age' },
    { name: 'City', prop: 'address.city' },
    { name: 'State', prop: 'address.state' }
  ];
  constructor(
    @Inject(DOCUMENT) private document: any,
    private renderer: Renderer,
    private materialService: MaterialService,
    private toastyService: ToastyService) {
  }

  ngOnInit() {
    this.renderer.setElementClass(this.document.body, 'body-padding-3', true);
    // this.setPage({ offset: 0 });
    this.refreshData();

  }
  ngOnDestroy(): void {
    this.renderer.setElementClass(this.document.body, 'body-padding-3', false);
  }

  updateValue(event, cell, cellValue, row) {
    this.editing[row.$$index + '-' + cell] = false;
    // this.materialService.update()
    console.log(row.$$index, cell, event.target.value )
    // this.rows[row.$$index][cell] = event.target.value;
  }

  async create(row) {
    console.log('create', row);
  }

  async update(row) {
    console.log('save', row);
    try {
      await this.materialService.update(row as Account);
      this.toastyService.info('updated');
      this.refreshData();
    } catch (err) {
      this.toastyService.error(err);
    }
  }

  async delete(row) {
    console.log('delete', row);
    try {
      await this.materialService.delete(row.id);
      this.toastyService.info('deleted');
      this.refreshData();
    } catch (err) {
      this.toastyService.error(err);
    }
  }

  private refreshData() {
    this.loadingIndicator = true;
    // startWith needed for ngx-datatable.
    this.rows$ = this.materialService.list().startWith(new Array<Account>());
    setTimeout(() => { this.loadingIndicator = false; }, 1000);
    this.selected = [];
  }

  onSelect(event) {
    console.log('Select Event', event, this.selected);
  }

  showMessage() {
    this.toastyService.info('my style is bootstrap');
  }
  // setPage(pageInfo) {
  //   this.page.pageNumber = pageInfo.offset;
  //   this.mockDataService.getResults(this.page).subscribe(pagedData => {
  //     this.page = pagedData.page;
  //     this.rows = pagedData.data;
  //   });
  // }
}
