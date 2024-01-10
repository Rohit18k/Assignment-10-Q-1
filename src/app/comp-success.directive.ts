import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }
}
