import { Component } from '@angular/core';
import { VerifyMobileService } from '../../core/services/VerifyMobileService ';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  constructor(private verifyService: VerifyMobileService,
    private fb: FormBuilder, private router: Router, private toastr: ToastrService) { }
  message: any
  VerifyMobile_Form !: FormGroup
  ngOnInit() {
    this.VerifyMobile_Form = this.fb.group({
      mobile: ['', [Validators.pattern('^[0-9]*$'), Validators.required, Validators.pattern('^[0-9]{10}$'), Validators.maxLength(10), Validators.minLength(10)]]
    });
  }
  VerifyMobile() {
    this.verifyService.verify(this.VerifyMobile_Form.value).subscribe({
      next: res => {
        debugger
        localStorage.setItem('mobile', this.VerifyMobile_Form.value.mobile);
        if (res.success && res.status_code == 1) {
          this.toastr.success(res.message);
          this.router.navigate(['/VerifyMpin']);
        }
        else if (res.success && res.status_code == 2) {
          this.toastr.success(res.message);
          this.router.navigate(['/VerifyOtp']);
        }
        else {
          alert(res.message);
        }
      },
      error: err => {
        this.toastr.error(err.message);
      }
    });

  }
  allowOnlyNumbers(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  }
}
