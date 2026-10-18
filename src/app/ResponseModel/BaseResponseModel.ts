export interface BaseResponseModel<T> {
    success: boolean;
    message: string;
    status_code: number;
    data: T;
}