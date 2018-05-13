import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError, retry } from 'rxjs/operators';

/*
* https://v5.angular.io/guide/http
* */
export interface ExtMaze {
  pony: number[];
  domokun: number[];
  endPoint: number[];
  size: number[];
  difficulty: number;
  data: string[][];
  mazeId: string;
  gameState: any;
}

@Injectable()
export class MazeProvider {
  serviceUrl = 'assets/data/sampleMaze.json';

  constructor(public http: HttpClient) {
    console.log('Hello MazeProvider Provider');
  }

  getMaze(): Observable<ExtMaze> {
    return this.http.get<ExtMaze>(this.serviceUrl)
    .pipe(
      //retry(3), // retry a failed request up to 3 times
      catchError(this.handleError) // then handle the error
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  }

}
