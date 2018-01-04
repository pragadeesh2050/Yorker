import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { CurrentMatchesComponent } from './current-matches/current-matches.component';
import { CurrentMatchesService } from 'app/current-matches.service'

@NgModule({
  declarations: [
    AppComponent,
    CurrentMatchesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
  ],
  providers: [CurrentMatchesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
