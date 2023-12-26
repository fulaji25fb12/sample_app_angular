import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, retry, throwError } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
    providedIn: 'root'
})

export class HelperService {
    constructor(private http: HttpClient) { }

    getApiCall<T>(apiEndpoint: string): Observable<T> {
        return this.http.get<T>(environment.baseUrl + apiEndpoint)
            .pipe(retry(0), catchError(this.handleError));
    }

    postApiCall<T>(apiEndpoint: string, data: any): Observable<T> {
        return this.http.post<T>(environment.baseUrl + apiEndpoint, data)
            .pipe(retry(0), catchError(this.handleError));
    }

    putApiCall<T>(apiEndpoint: string, data: any): Observable<T> {
        return this.http.put<T>(environment.baseUrl + apiEndpoint, data)
            .pipe(retry(0), catchError(this.handleError));
    }

    deleteApiCall<T>(apiEndpoint: string): Observable<T> {
        return this.http.delete<T>(environment.baseUrl + apiEndpoint)
            .pipe(retry(0), catchError(this.handleError));
    }

    handleError(error: HttpErrorResponse) {
        if(error.status == 0) {
            alert('Server Down! Please try again later.'); 
        }
        return throwError('Something bad happened! please try again later.');
    }
}