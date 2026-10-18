import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-reusable-table',
  imports: [CommonModule, TableModule, PaginatorModule],
  templateUrl: './reusable-table.html',
  styleUrl: './reusable-table.css',
})
export class ReusableTable {
  /* TABLE CONFIG */
  // @Input() columns: any[] = [];
  // @Input() data: any[] = [];
  // @Input() actions: any[] = [];

  // /* PAGINATION INPUTS */
  // @Input() pageSize = 5;
  // @Input() currentPage = 1;

  // /* OUTPUT EVENTS */
  // @Output() actionClicked = new EventEmitter<any>();
  // @Output() pageChanged = new EventEmitter<number>();

  // totalPages = 0;
  // paginatedData: any[] = [];

  // ngOnChanges() {
  //   this.calculatePagination();
  // }

  // calculatePagination() {
  //   this.totalPages = Math.ceil(this.data.length / this.pageSize);
  //   const start = (this.currentPage - 1) * this.pageSize;
  //   const end = start + this.pageSize;
  //   this.paginatedData = this.data.slice(start, end);
  // }

  // changePage(page: number) {
  //   if (page < 1 || page > this.totalPages) return;
  //   this.pageChanged.emit(page);
  // }

  // onActionClick(action: string, row: any) {
  //   this.actionClicked.emit({ action, row });
  // }

  @Input() columns: any[] = [];
  @Input() data: any[] = [];
  @Input() actions: any[] = [];

  @Input() paginator = false;   // 👈 ON / OFF
  @Input() rows = 5;        // page size
  @Input() first = 0;       // start index

  @Output() pageChanged = new EventEmitter<any>();
  @Output() actionClicked = new EventEmitter<any>();

  onPageChange(event: any) {
    this.pageChanged.emit(event); // PrimeNG page event
  }

  onAction(action: string, row: any) {
    this.actionClicked.emit({ action, row });
  }
}
