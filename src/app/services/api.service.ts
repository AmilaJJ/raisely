import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import Api from './api.config.json';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json'
    }),
    responseType: 'text' as 'json'
};




@Injectable()
export class ApiService {

    private _BASEURL: string;

    constructor(private http: HttpClient) {
        this._BASEURL = Api.BASE_URL;
    }

    post(url, data): Observable<any> {
        return this.http.post<any>(this._BASEURL + url, JSON.stringify(data), httpOptions)
        .pipe(
            tap((res) => console.log(`added = ${res}`)),
            catchError(this.handleError<any>('post'))
        );
    }


    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
          // TODO: better job of transforming error for user consumption
          console.log(`${operation} failed: ${error.message}`);
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }
}
