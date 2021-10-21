import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Model } from './model';
import { Router } from '@angular/router';
import { Game } from './list-games/list-games.component';
//import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GameDataService {

  
  private apiBaseUrl: string ="http://localhost:3000/api";
  constructor(private http: HttpClient, private router: Router) {
  }

  public deleteGame(id:string) :any {
    const url: string = this.apiBaseUrl + "/games/"+id;
    return this.http.delete(url).toPromise()
          .then(response => {
            this.router.navigate(['/games']);
          }).catch(this.handleError);
  }
  public editGame(data: Model): any {
    const url: string = this.apiBaseUrl+"/games/"+data._id
    return this.http.put(url,data).toPromise()
            .then(response => {
              this.router.navigate(['games']);
            }).catch(this.handleError);
  }

  public addGame(data:Model): any {
    const url: string = this.apiBaseUrl+"/games"

    return this.http.post( url, data).toPromise() 
    .then(response => {
      this.router.navigate(['games']);
    })
    .catch(this.handleError);
  }
  public getGames()
    : Promise<Model[]> {
    const url: string = this.apiBaseUrl + "/games";
    return this.http.get(url).toPromise()
      .then(response => response as Model[])
      .catch(this.handleError);
  }
  public getGame(gameId: string)
    : Promise<Model> {
    const url: string = this.apiBaseUrl + "/games/" + gameId;
    return this.http.get(url).toPromise()
      .then(response => response as Model)
      .catch(this.handleError);
  }
  private handleError(error: any): Promise<any> {
    console.log("Something went wrong ", error);
    return Promise.reject(error.message || error);
  }
}
