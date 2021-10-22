import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';


import { GameDataService } from '../game-data.service';
import { Model } from '../model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  model!: Model;
  id!: any;
  constructor(private gameDataService: GameDataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
   this.route.paramMap.subscribe((params:ParamMap) => {
     this.id = params.get('id');
   })

   this.gameDataService.getGame(this.id).then(response=>{
     this.model = response;
   })

  }

  onSubmit(): void {
     this.gameDataService.editGame(this.model);
  }

}
