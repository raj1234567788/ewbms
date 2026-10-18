import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BaseResponseModel } from "../../ResponseModel/BaseResponseModel";
import { ApiConfig } from "../../config/api.Base.config";
import { API_ENDPOINTS } from "../../config/api-endpoints";
import { complaintByMobileRequest } from "../models/complaintByMobileRequest";

@Injectable({ providedIn: 'root' })
export class complaintRepository {
    constructor(private http: HttpClient) { }

    GetTotalComplaint() {
        return this.http.get<BaseResponseModel<any>>(ApiConfig.BASE_URL + "" + API_ENDPOINTS.GetTotalComplaint.GetTotalComplaint);
    }
    GetTotalComplaintByMobile(payload: complaintByMobileRequest) {
        return this.http.post<BaseResponseModel<any>>(
            ApiConfig.BASE_URL + "" + API_ENDPOINTS.GetComplaintByMobile.GetComplaintByMobile,
            payload
        );
    }

}