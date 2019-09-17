import { Component, OnInit, Input } from '@angular/core';
import { ColumnConfig } from './models/column.model';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import * as cloneDeep from 'lodash/cloneDeep';

@Component({
  selector: 'ronx-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent implements OnInit {
  public gridId: string;
  private previousColumnConfig: ColumnConfig[];
  private copyOfColumnConfig: ColumnConfig[];
  private columnData = new BehaviorSubject<ColumnConfig[]>([]);
  @Input()
  set columns(value) {
    // set the latest value for _data BehaviorSubject
    this.columnData.next(value);
  }

  get columns() {
    // get the latest value from _data BehaviorSubject
    return this.columnData.getValue();
  }
  constructor() {}

  private randomStr(): string {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  private guid(): string {
    return (
      this.randomStr() +
      this.randomStr() +
      '-' +
      this.randomStr() +
      '-' +
      this.randomStr() +
      '-' +
      this.randomStr() +
      '-' +
      this.randomStr() +
      this.randomStr() +
      this.randomStr()
    );
  }

  private bootstrapGrid(): void {
    this.initColumns();
  }

  private initColumns(): void {
    if (this.columns) {
    }
  }
  ngOnInit(): void {
    this.gridId = this.guid();
    this.previousColumnConfig = cloneDeep(this.columns);
    this.columnData.subscribe((columns: ColumnConfig[]) => {
      if (columns && columns.length > 0) {
        this.previousColumnConfig = cloneDeep(columns);
        this.bootstrapGrid();
      }
    });
  }
}
