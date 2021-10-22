import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListGamesComponent } from './list-games/list-games.component';
import { OneGameComponent } from './one-game/one-game.component';
import { AddGameComponent } from './add-game/add-game.component';
import { EditComponent } from './edit/edit.component';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    ListGamesComponent,
    OneGameComponent,
    AddGameComponent,
    EditComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path:"games",
        component: ListGamesComponent
      },
      {
        path: "games/add",
        component:AddGameComponent
    },
      {
        path:"games/:id",
        component: OneGameComponent
      },

      {
        path:"games/edit/:id",
        component: EditComponent
      },
      {
        path:"registration",
        component: RegistrationComponent
      }
     
    ])
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
