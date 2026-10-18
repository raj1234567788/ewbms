import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseResponseModel } from "../../ResponseModel/BaseResponseModel";
import { VerifyMobileRequest, VerifyMpinRequest, VerifyOtpRequest } from "../models/verify-mobile.model";
import { ApiConfig } from '../../config/api.Base.config';
import { API_ENDPOINTS } from '../../config/api-endpoints';


@Injectable({ providedIn: 'root' })

export class mobileverifyrepository {

    constructor(private http: HttpClient) { }

    verifyMobile(payload: VerifyMobileRequest) {
        return this.http.post<BaseResponseModel<VerifyMobileRequest>>(
            ApiConfig.BASE_URL + "" + API_ENDPOINTS.VerifyMobile.VerifyMobile,
            payload
        );
    }
    verifyMpin(payload: VerifyMpinRequest) {
        return this.http.post<BaseResponseModel<VerifyMpinRequest>>(
            ApiConfig.BASE_URL + "" + API_ENDPOINTS.VerifyMpin.VerifyMpin,
            payload
        );
    }
    verifyOtp(payload: VerifyOtpRequest) {
        return this.http.post<BaseResponseModel<VerifyOtpRequest>>(
            ApiConfig.BASE_URL + "" + API_ENDPOINTS.VerifyOtp.VerifyOtp,
            payload
        );
    }
    SetMpin(payload: VerifyMpinRequest) {
        return this.http.post<BaseResponseModel<VerifyMpinRequest>>(
            ApiConfig.BASE_URL + "" + API_ENDPOINTS.SetMpin.SetMpin,
            payload
        );
    }
    ForgetMpin(payload: VerifyMobileRequest) {
        return this.http.post<BaseResponseModel<VerifyMobileRequest>>(
            ApiConfig.BASE_URL + "" + API_ENDPOINTS.ForgetMpin.ForgetMpin,
            payload
        );
    }
}