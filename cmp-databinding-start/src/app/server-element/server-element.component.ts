import { Component, OnInit, Input, ViewEncapsulation, ContentChild, ElementRef, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, AfterContentInit {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @ContentChild('paragraphElement' , { static : true }) paragraph: ElementRef;

  constructor() { }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit - content loaded: '+ this.paragraph.nativeElement.textContent);
  }

  ngOnInit(): void {
    console.log('ngOnInit - content loaded: '+ this.paragraph.nativeElement.textContent);
  }

}
