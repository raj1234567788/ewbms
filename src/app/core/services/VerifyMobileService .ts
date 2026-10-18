import { Injectable } from "@angular/core";
import { mobileverifyrepository } from "../repository/mobileverifyrepository";
import { map } from "rxjs";
import { VerifyMobileRequest, VerifyMpinRequest, VerifyOtpRequest } from "../models/verify-mobile.model";

@Injectable({ providedIn: 'root' })
export class VerifyMobileService {

    constructor(private repo: mobileverifyrepository) { }

    verify(model: VerifyMobileRequest) {
        return this.repo.verifyMobile(model).pipe(
            map(res => {
                return res;
            })
        );

    }
    verifyMpin(model: VerifyMpinRequest) {
        return this.repo.verifyMpin(model).pipe(
            map(res => {
                return res;
            })
        );

    }

    verifyOtp(model: VerifyOtpRequest) {
        return this.repo.verifyOtp(model).pipe(
            map(res => {
                return res;
            })
        );

    }

    SetMpin(model: VerifyMpinRequest) {
        return this.repo.SetMpin(model).pipe(
            map(res => {
                return res;
            })
        );

    }

    ForgetMpin(model: VerifyMobileRequest) {
        return this.repo.ForgetMpin(model).pipe(
            map(res => {
                return res;
            })
        );

    }
}