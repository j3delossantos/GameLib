import { Component, HostBinding, OnInit } from '@angular/core';
import { Game } from 'src/app/models/Game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  @HostBinding('class') class= 'row'

  games: any = [];

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
    this.getGames();
  }

  getGames(){
    this.gamesService.getGames().subscribe(
      res => {
        this.games = res;
      },
      err => console.log(err)
    );
  }

  deleteGame(id: string){
   let confimation = confirm("Estas seguro de eliminar este juego?" );
   if (confimation)
   {
    this.gamesService.deleteGame(id).subscribe(
      res =>{
        console.log(res);
        this.getGames();
      },
      err => console.log(err)
    
    )

    
   }

    
   
  }

 

}
