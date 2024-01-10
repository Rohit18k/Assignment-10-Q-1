import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCompFailure]'
})
export class CompFailureDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }
}
