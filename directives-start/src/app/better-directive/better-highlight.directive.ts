import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';
import { StringMapWithRename } from '@angular/compiler/src/compiler_facade_interface';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string ;
  @HostBinding('style.color') color: string = 'black';

  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    // this.renderer.setStyle(this.eleRef.nativeElement, "background-color", "blue");
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.eleRef.nativeElement, "background-color", 'blue');
    this.backgroundColor = this.highlightColor;
    this.color = 'red';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.eleRef.nativeElement, "background-color","transparent");
    this.backgroundColor = this.defaultColor;
    this.color = 'black';
  }
}
