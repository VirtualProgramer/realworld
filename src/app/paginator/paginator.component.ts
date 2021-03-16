import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit, OnChanges {

  @Input() totalCount;
  @Input() pageSize = 20;
  @Output() pageChange = new EventEmitter<number>();
  pages = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges) {

    this.totalCount = changes["totalCount"].currentValue;

    this.pages = new Array(Math.ceil(this.totalCount / this.pageSize));
  }

  ngOnInit(): void {
  }

  setPage(idx) {
    this.pageChange.emit(idx);
  }

}
