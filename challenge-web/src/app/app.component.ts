import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  searchString:string;
  eventEmitter:EventEmitter<string>=new EventEmitter<string>();
  search(){
    this.eventEmitter.emit(this.searchString);

  }
  
}
