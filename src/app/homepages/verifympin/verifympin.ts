import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { VerifyMobileService } from '../../core/services/VerifyMobileService ';

@Component({
  selector: 'app-verifympin',
  imports: [ReactiveFormsModule],
  templateUrl: './verifympin.html',
  styleUrl: './verifympin.css',
})
export class Verifympin {

  constructor(private verifyService: VerifyMobileService, private fb: FormBuilder, private router: Router) { }
  message: any
  VerifyMpin_Form !: FormGroup
  ngOnInit() {
    this.VerifyMpin_Form = this.fb.group({
      mobile: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      Mpin: ['']
    });
  }
  verifyMpin() {
    this.VerifyMpin_Form.patchValue({
      mobile: localStorage.getItem('mobile')
    })
    this.verifyService.verifyMpin(this.VerifyMpin_Form.value).subscribe({
      next: res => {
        if (res.success && res.status_code == 200) {
          this.router.navigate(['/dashboard']);
        }
        else {
          alert(res.message);
        }
      },
      error: err => {
        debugger
        this.message = err.message;
      }
    });

  }
  allowOnlyNumbers(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  }
}
