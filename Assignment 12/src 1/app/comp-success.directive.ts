import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCompSuccess]'
})
export class CompSuccessDirective {

  constructor(private el : ElementRef) { }

  @HostListener ('mouseenter') onmouseenter()
  {
    this.el.nativeElement.style.color = 'green'
  }

  @HostListener ('mouseleave') onmouseleave()
  {
    this.el.nativeElement.style.color = 'black'
  }

}
