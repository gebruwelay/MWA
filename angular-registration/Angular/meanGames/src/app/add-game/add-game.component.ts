import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../game-data.service';
import { Model } from '../model';
@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  model =  new Model();
  constructor(private gameDataService: GameDataService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
   this.gameDataService.addGame(this.model);
    console.log("I am in on Submit method", this.model.title);
  }
}
