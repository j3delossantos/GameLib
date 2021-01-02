import { Component, HostBinding, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/Game';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-game-form',
  templateUrl: './game-form.component.html',
  styleUrls: ['./game-form.component.css']
})
export class GameFormComponent implements OnInit {

  @HostBinding('class') class= 'row';

  game: Game = {
    id:0 ,
    title:'',
    description:'',
    image:'',
    created_at: new Date()
  };

  edit: boolean = false;

  constructor(private gamesService: GamesService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params.id){
      this.gamesService.getAGame(params.id).subscribe(
        res=>{
          console.log(res);
          this.game = res;
          this.edit= true;

        },
        err => console.log(err)
      )
    }
  }

  saveNewGame(){
    delete this.game.created_at;
    delete this.game.id;
    this.gamesService.saveGame(this.game)
    .subscribe(
      res =>{
        console.log(res);
        this.router.navigate(['/games'])
      },
      err => console.error(err)
    )
  }

  updateGame(){
    const params = this.activedRoute.snapshot.params;
    this.gamesService.updateGame(params.id, this.game).subscribe(
      res=>{
        console.log(res);        
        this.router.navigate(['/games'])

      },
      err => console.log(err)
    )
  }

}
