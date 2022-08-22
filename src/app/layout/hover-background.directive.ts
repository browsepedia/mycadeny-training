import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  Optional,
  Renderer2,
} from '@angular/core';
import { HeaderComponent } from './header/header.component';

@Directive({
  selector: '[hoverBackground]',
})
export class HoverBackgroundDirective {
  constructor(@Optional() private _host: HeaderComponent) {
    if (_host instanceof HeaderComponent) {
      console.log('yaaay');
    } else {
      throw new Error(
        'You cannot use [hoverBackground] on anything other than a HeaderComponent'
      );
    }
  }

  @HostListener('mouseover')
  onHover() {}

  @HostListener('mouseleave')
  onMouseLeave() {}

  @Input() hoverBackground: string = 'red';
}
