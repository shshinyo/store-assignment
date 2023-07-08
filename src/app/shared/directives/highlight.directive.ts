import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @HostBinding('class') public backgroundColor: string = 'bg-transparent';

  @HostListener('mouseover') public onHover(): void {
    this.backgroundColor =
      'bg-orange-100 ease-in-out duration-100 p-1 rounded shadow-md';
  }

  @HostListener('mouseout') public onLeave(): void {
    this.backgroundColor = 'bg-transparent';
  }
}
