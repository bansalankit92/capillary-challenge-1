import { Injectable } from '@angular/core';
import { Http, URLSearchParams, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Pagination } from "app/models/Pagination";
import { Constants } from "app/app.constants";

@Injectable()
export class GameService {

  constructor(private http:Http) { }
  
    getGames( pagination:Pagination) : Observable<any[]> {
      let params: URLSearchParams = new URLSearchParams();
      params.set('currentPage', String(pagination.currentPage));
      params.set('noOfRows',  String(pagination.noOfRows));
      params.set('sortBy', pagination.sortBy);
      params.set('sortingOrder', pagination.sortingOrder);
      console.log(pagination);
      console.log(params);
          // ...using get request
      return this.http.get(Constants.HOST+Constants.GAMES_URL,{ search : params})
                         .map((res) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

      getsearchedGamesByName(pagination:Pagination,searchString:string) : Observable<any[]> {
        let params: URLSearchParams = new URLSearchParams();
        params.set('currentPage', String(pagination.currentPage));
        params.set('noOfRows',  String(pagination.noOfRows));
        params.set('sortBy', pagination.sortBy);
        params.set('sortingOrder', pagination.sortingOrder);
            // ...using get request
        return this.http.get(Constants.HOST+Constants.GAMES_URL+"/"+searchString,{ search : params})
                          .map((res) => res.json())
                          //...errors if any
                          .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }

}
