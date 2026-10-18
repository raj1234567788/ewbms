import { ChangeDetectorRef, Component } from '@angular/core';
import { complaintService } from '../../core/services/complaintService';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  constructor(private apiService: complaintService, private fb: FormBuilder, private cd: ChangeDetectorRef) { }
  Complaint_Form!: FormGroup
  complaintList: any
  ngOnInit() {
    this.Complaint_Form = this.fb.group({
      mobile: localStorage.getItem('mobile')
    })
    this.GetComplaintByMobile()
  }
  GetComplaintByMobile() {
    this.apiService.GetTotalComplaintByMobile(this.Complaint_Form.value).subscribe(res => {
      //debugger
      this.complaintList = res.data
      this.cd.detectChanges();
    })
  }
}
