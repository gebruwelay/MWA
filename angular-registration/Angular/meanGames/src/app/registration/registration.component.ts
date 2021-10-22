import { Component, OnInit } from '@angular/core';
import { GameDataService } from '../game-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  name!:string;
  username!:string;
  password!:string;

  constructor(private gameDataService: GameDataService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.gameDataService.register({name:this.name, username:this.username, password:this.password});
  }

}
