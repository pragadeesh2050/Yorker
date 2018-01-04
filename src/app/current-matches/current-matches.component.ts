import { Component, OnInit } from '@angular/core';
import { CurrentMatchesService } from '../current-matches.service'
import { IMatch } from '../match'
import * as _ from 'underscore';


@Component({
  selector: 'app-current-matches',
  templateUrl: './current-matches.component.html',
  styleUrls: ['./current-matches.component.scss']
})
export class CurrentMatchesComponent implements OnInit {

   // instantiate posts to an empty array
   matches: any = [];
   

  constructor(private currentMatchesService: CurrentMatchesService) { }

  ngOnInit() {
    // Retrieve posts from the API
    console.log('now: ', _.now());
    this.currentMatchesService.getAllMatches().subscribe(data => {
      this.matches = data;
      console.log( this.matches );    
    });
  }

}
