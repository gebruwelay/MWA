import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGamesComponent } from './list-games/list-games.component';
import { OneGameComponent } from './one-game/one-game.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGamesComponent,
    OneGameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:"games",
        component: ListGamesComponent
      },{
        path:"games/:id",
        component: OneGameComponent
      }
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
