import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import { GameDataService } from '../game-data.service';
import { Model } from '../model';

@Component({
  selector: 'app-one-game',
  templateUrl: './one-game.component.html',
  styleUrls: ['./one-game.component.css']
})
export class OneGameComponent implements OnInit {
  private id!: any;
  public game!: Model;
  constructor(private gameDataService:GameDataService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.route.paramMap.subscribe((params:ParamMap) => {
      this.id  = params.get('id');
    })
    this.gameDataService.getGame(this.id).then(response => {
      this.game = response;
    })
  }

}
