import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlightMouse]',
})
export class HighlightMouseDirective {
  @HostListener('mouseenter') onMouseOver() {
    // this._renderer.setStyle(
    //   this._element.nativeElement,
    //   'background-color',
    //   'violet'
    // );

    this.backgroundColor = 'violet';
  }

  @HostListener('mouseleave') onMouseLeave() {
    // this._renderer.setStyle(
    //   this._element.nativeElement,
    //   'background-color',
    //   ''
    // );
    this.backgroundColor = '';
  }

  // @HostBinding('style.backgroundColor') backgroundColor!: string;
  @HostBinding('style.backgroundColor') get setColor() {
    // algum código de manipulção que necessite
    return this.backgroundColor;
  }

  private backgroundColor!: string;
}
