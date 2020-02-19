import { Directive, ElementRef, Input, AfterViewInit, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlightLongString]'
})
export class HighlightLongStringDirective implements AfterViewInit {

  @Input() str: string;
  @Input() len: number;
  @HostBinding('style.background') background: string;

  constructor(private eRef: ElementRef) { }

  ngAfterViewInit(): void {
    if (this.str && this.str.length > this.len) {
      this.eRef.nativeElement.style.border = '1px dotted red';
    }
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.background = 'yellow'; // Using @HostBinding
    // this.eRef.nativeElement.style.background = 'yellow'; // Using ElementRef => nativeElement
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.background = 'white';
  }

}
