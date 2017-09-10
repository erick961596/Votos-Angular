import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VotesComponent } from './votes/votes.component';
import { articleComponent } from './votes/article/article.component';

@NgModule({
  declarations: [
    AppComponent, VotesComponent,articleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
