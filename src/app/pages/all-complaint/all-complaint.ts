import { Component } from '@angular/core';
import { ReusableTable } from '../../shared/reusable-table/reusable-table';
import { CommonModule } from '@angular/common';
import { QuillModule } from 'ngx-quill';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-all-complaint',
  imports: [ReusableTable, CommonModule, QuillModule, FormsModule],
  templateUrl: './all-complaint.html',
  styleUrl: './all-complaint.css',
})
export class AllComplaint {
  // columns = [
  //   { header: 'ID', field: 'id' },
  //   { header: 'Name', field: 'name' },
  //   { header: 'Status', field: 'status' }
  // ];

  // tableData = [
  //   { id: 1, name: 'Rajesh', status: 'Pending' },
  //   { id: 2, name: 'Amit', status: 'Approved' },
  //   { id: 3, name: 'Sumit', status: 'Pending' },
  //   { id: 4, name: 'Neha', status: 'Approved' },
  //   { id: 5, name: 'Pooja', status: 'Pending' },
  //   { id: 6, name: 'Ravi', status: 'Approved' }
  // ];

  // actions = [
  //   { name: 'view', label: 'View' },
  //   { name: 'edit', label: 'Edit' },
  //   { name: 'delete', label: 'Delete' }
  // ];

  // currentPage = 1;
  // pageSize = 3;

  // onPageChange(page: number) {
  //   this.currentPage = page;
  // }

  // onTableAction(event: any) {
  //   if (event.action === 'view') {
  //     alert(JSON.stringify(event.row));
  //   }

  //   if (event.action === 'edit') {
  //     alert(JSON.stringify(event.row));
  //   }

  //   if (event.action === 'delete') {
  //     alert(JSON.stringify(event.row));
  //   }
  // }
  columns = [
    { field: 'id', header: 'ID' },
    { field: 'name', header: 'Name' },
    { field: 'status', header: 'Status' }
  ];

  tableData = [
    { id: 1, name: 'Rajesh', status: 'Pending' },
    { id: 2, name: 'Amit', status: 'Approved' },
    { id: 3, name: 'Neha', status: 'Pending' },
    { id: 4, name: 'Ravi', status: 'Approved' },
    { id: 5, name: 'Pooja', status: 'Pending' }
  ];

  actions = [
    { name: 'view', label: 'View' },
    { name: 'edit', label: 'Edit' },
    { name: 'delete', label: 'Delete' }
  ];

  rows = 3;
  first = 0;


  onPageChange(event: any) {
    this.rows = event.rows;
    this.first = event.first;

    console.log('Page changed', event);
  }

  onTableAction(event: any) {
    console.log(event.action, event.row);
  }

  paginator = true;
  description: any

  getdata() {
    alert(this.description);
  }
}
