import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { GameService } from "app/services/game.service";
import { Game } from "app/models/game";
import { Pagination } from "app/models/Pagination";


@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  public games:Game[]=[];
  searchedText:string;
  pagination:Pagination=new Pagination();
  @Input() searchEvent:EventEmitter<string>=new EventEmitter<string>();
  count:number=100;

    constructor(private gameService:GameService) { }

  ngOnInit() {
    this.pagination.noOfRows=5;
    this.pagination.currentPage=1;
    this.pagination.sortBy='score';
    this.pagination.sortingOrder='descending';
this.getGames();
    this.searchEvent.subscribe(item=>{
      this.searchedText=item;
      this.search();
    });
  }

  getGames(){

    this.gameService.getGames( this.pagination).subscribe(result=>{
      this.games=result;
      console.log(result);
    });
  }
  search(){
      this.gameService.getsearchedGamesByName( this.pagination,this.searchedText).subscribe(result=>{
      this.games=result;
      console.log(result);
    });
  }

  nextPage(){
    if(this.count){

    }
    this.pagination.currentPage++;
    this.getGames();
  }
  previousPage(){
     this.pagination.currentPage--;
    this.getGames();
  }
  noOfRowsChanged(rows){
 this.pagination.noOfRows=rows;
 this.getGames();
  }
  sortingChanged(order:string){

    this.getGames();

  }
}
