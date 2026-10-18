import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class AppToaster {

  constructor(private toastr: ToastrService) { }

  success(message: string) {
    this.toastr.success(message, 'Success');
  }

  error(message: string) {
    this.toastr.error(message, 'Error');
  }

  warning(message: string) {
    this.toastr.warning(message, 'Warning');
  }

  info(message: string) {
    this.toastr.info(message, 'Info');
  }
}


