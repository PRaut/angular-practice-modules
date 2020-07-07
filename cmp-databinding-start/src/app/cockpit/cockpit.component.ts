import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  // newServerName = '';
  // newServerContent = '';

  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() bluePrintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();

  @ViewChild('serverContentInput', { static: true }) serverContentInput: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput: HTMLInputElement) {
    this.serverCreated
      .emit({
        serverName: serverNameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
      });
  }

  onAddBlueprint(serverNameInput: HTMLInputElement) {
    this.bluePrintCreated
      .emit({
        serverName: serverNameInput.value,
        serverContent: this.serverContentInput.nativeElement.value
      });
  }
}
