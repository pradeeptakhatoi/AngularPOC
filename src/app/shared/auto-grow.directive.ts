import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appAutoGrow]'
})
export class AutoGrowDirective {
  @Input() minHeight = 80;
  constructor(private el: ElementRef) {  }

  autoGrow() {
    const textArea = this.el.nativeElement;

    textArea.style.overflow = 'hidden';
    textArea.style.height = '0px';
    const newHeight = (textArea.scrollHeight > this.minHeight) ? textArea.scrollHeight : this.minHeight;
    textArea.style.height = newHeight + 'px';
  }

  @HostListener('keyup') onKeyup() {
    this.autoGrow();
  }

  @HostListener('keypress') onKeyPress(e) {
    this.autoGrow();
  }

  @HostListener('paste') onPaste() {
    this.autoGrow();
  }

}
