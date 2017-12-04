import { Injectable } from '@angular/core';
import { HttpService } from "../http/http.service";
import { Observable } from "rxjs/Observable";

@Injectable()
export class ListingService {

  constructor(
    private http: HttpService
  ) {  }

  getList(): Observable <any> {
    return this.http.get('assets/data/on-going.json', {})
      .map((response: any) => {
        return response;
      });
  }

}
