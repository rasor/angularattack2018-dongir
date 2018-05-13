import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { Observable } from 'rxjs/Observable';

/*
  Generated class for the MazeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MazeProvider {

  constructor(public http: HttpClient) {
    console.log('Hello MazeProvider Provider');
  }

  getSampleMaze(): any {
    // https://angular.io/guide/http


    // get users from api
    // return this.http.get('assets/ordersummary.json')//, options)
    //     .map((response: Response) => {
    //         console.log("mock data" + response.json());
    //         return response.json();
    //     }

    // )
    // .catch(this.handleError);

    // this.http.get('assets/data/sampleMaze.json')
    // .subscribe(data => {
    //   console.log(data)
    //   return data;
    // });
    
    // this.http.get('assets/data/sampleMaze.json')
    // .subscribe(data => this.config = {
    //   heroesUrl: data['heroesUrl'],
    //   textfile:  data['textfile']
    // });
  }
}
