import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { count } from 'console';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  firstSubscription: Subscription;
  constructor() { }

  ngOnInit() {
    this.firstSubscription = interval(1000).subscribe(count => {
      console.log(count);
    });
  }

  ngOnDestroy():void{
    this.firstSubscription.unsubscribe();
  }



}
