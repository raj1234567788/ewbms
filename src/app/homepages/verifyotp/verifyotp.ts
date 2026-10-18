import { VerifyMobileService } from './../../core/services/VerifyMobileService ';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verifyotp',
  imports: [ReactiveFormsModule],
  templateUrl: './verifyotp.html',
  styleUrl: './verifyotp.css',
})
export class Verifyotp {

  VerifyOtp_Form!: FormGroup
  constructor(private router: Router, private apiService: VerifyMobileService, private fb: FormBuilder) {

  }
  ngOnInit() {
    //alert(1)
    this.VerifyOtp_Form = this.fb.group({
      mobile: localStorage.getItem('mobile'),
      OTP: ['']
    })
  }
  verifyotp() {
    this.apiService.verifyOtp(this.VerifyOtp_Form.value).subscribe({
      next: res => {
        debugger
        if (res.success && res.status_code == 200) {
          this.router.navigate(['/setmpin']);
        }
        else {
          alert(res.message);
        }
      },
      error: err => {
        console.log(err)
      }
    })
  }
  allowOnlyNumbers(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  }
}
