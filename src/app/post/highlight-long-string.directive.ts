import { Directive, ElementRef, Input, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appHighlightLongString]'
})
export class HighlightLongStringDirective implements AfterViewInit {

  @Input() str: string;
  @Input() len: number;

  constructor(private eRef: ElementRef) { }

  ngAfterViewInit(): void {
    if (this.str && this.str.length > this.len) {
      this.eRef.nativeElement.style.border = '1px dotted red';
    }
  }

}
