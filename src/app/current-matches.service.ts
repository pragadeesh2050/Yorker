import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class CurrentMatchesService {

  constructor(private http: Http) { }
  
  // Get all matches from the API
  getAllMatches() {
    return this.http.get('http://localhost:3000/api/current-matches')
      .map(res => res.json());
  }

}