import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

  onIntervalFired(firedInterval: number){
    if(firedInterval % 2 == 0){
      this.evenNumbers.push(firedInterval);
    }else{
      this.oddNumbers.push(firedInterval);
    }
  }
}
