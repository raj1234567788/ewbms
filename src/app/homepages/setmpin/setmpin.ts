import { Component } from '@angular/core';
import { VerifyMobileService } from '../../core/services/VerifyMobileService ';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-setmpin',
  imports: [ReactiveFormsModule],
  templateUrl: './setmpin.html',
  styleUrl: './setmpin.css',
})
export class Setmpin {
  SetMpin_Form!: FormGroup
  constructor(private apiService: VerifyMobileService, private fb: FormBuilder, private router: Router) { }
  ngOnInit() {
    this.SetMpin_Form = this.fb.group({
      mobile: localStorage.getItem('mobile'),
      Mpin: [''],
      ReMpin: ['']
    })
  }
  setmpin() {
    if (this.SetMpin_Form.value.Mpin != this.SetMpin_Form.value.ReMpin) {
      alert("Mpin mismach ")
    }
    else {
      this.apiService.SetMpin(this.SetMpin_Form.value).subscribe({
        next: res => {
          if (res.success && res.status_code == 200) {
            this.router.navigate(['/VerifyMpin']);
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
  }
  allowOnlyNumbers(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/[^0-9]/g, '');
  }
}
