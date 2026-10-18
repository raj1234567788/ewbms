import { Injectable } from '@angular/core';
import { complaintRepository } from '../repository/complaintRepository';
import { map } from 'rxjs';
import { complaintByMobileRequest } from '../models/complaintByMobileRequest';

@Injectable({ providedIn: 'root' })
export class complaintService {
    constructor(private repo: complaintRepository) { }
    getTotalComplaint() {
        return this.repo.GetTotalComplaint().pipe(
            map(res => {
                return res;
            })
        );
    }
    GetTotalComplaintByMobile(model: complaintByMobileRequest) {
        return this.repo.GetTotalComplaintByMobile(model).pipe(
            map(res => {
                return res;
            })
        );

    }
}