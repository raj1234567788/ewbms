import { ChangeDetectorRef, Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { complaintService } from '../../core/services/complaintService';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  constructor(private router: Router, private apiService: complaintService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
    this.GetTotal();
  }
  totalComplaint: number = 0
  pendingComplaint: number = 0
  issuedComplaint: number = 0
  rejectedComplaint: number = 0
  GetTotal() {
    this.apiService.getTotalComplaint().subscribe(res => {

      debugger
      if (res && res.data && res.data.length > 0) {
        // const data = res.data[0];
        this.totalComplaint = res.data[0].total;
        this.pendingComplaint = res.data[0].pending;
        this.issuedComplaint = res.data[0].issued;
        this.rejectedComplaint = res.data[0].rejected;
        this.cd.detectChanges();
      } else {
        this.totalComplaint = 10;
        this.pendingComplaint = 0;
        this.issuedComplaint = 0;
        this.rejectedComplaint = 0;
      }
    })
  }
  logout() {
    this.router.navigate(['/login'])
  }
  AllComplaint() {
    this.router.navigate(['/AllComplaint'])
  }
}
