import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  @Input('parentData') name: string;
  @Output() childEvent = new EventEmitter();

  public textValue: string = "Magic";
  isReadOnly:boolean= false;
  successClass: string = "text-success";
  hasError = false;
  isInfo = true;
  public textClasses: any = {
    "text-success": !this.hasError,
    "text-danger" : this.hasError,
    "text-info" : this.isInfo
  }

  message = "code evolution";
  currentDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  logMessage(value: any){
    // console.log(value);
    this.childEvent.emit('Hello From Child to Parent');
  }

}
