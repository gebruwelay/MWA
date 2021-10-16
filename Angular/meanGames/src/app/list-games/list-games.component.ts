import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../game-data.service';
@Component({
  selector: 'app-list-games',
  templateUrl: './list-games.component.html',
  styleUrls: ['./list-games.component.css']
})
export class ListGamesComponent implements OnInit {

  constructor(private gameDataService: GameDataService) { }

  games:Game[] =[];
  ngOnInit(): void {
   // this.gameDataService.getGames();
    this.gameDataService.getGames().then(response => {
      console.log(response)
      this.games = response
    });
  }

}
export class Game {
    title!: string;
    price!: number;
    _id!:string;
}