// TODO : from /Developer/Work/SPA/3rdparty/web-master
import { Directive, AfterViewInit, ElementRef, Input, HostListener, Renderer } from '@angular/core';
declare var window: any;

@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[parallax]',
})
// tslint:disable-next-line:directive-class-suffix
export class ParallaxDirective implements AfterViewInit {
  @Input('speed') speed: number;
  @Input('initialPosY') initialPosY = 0;
  private element: HTMLElement;

  @HostListener('window:touchmove')
  touchmove() {
    this.execute();
  }

  @HostListener('window:scroll')
  scroll() {
    this.execute();
  }

  constructor(el: ElementRef, private renderer: Renderer) {
    this.element = el.nativeElement;
  }

  ngAfterViewInit() {
    this.execute();
  }

  private execute() {
    const scrollTop = (window.pageYOffset !== undefined)
      ? window.pageYOffset
      : window(
        document.documentElement ||
        document.body.parentNode ||
        document.body
      ).scrollTop;

    const speed = (scrollTop / this.speed) * -1;

    const pos = speed === 0
      ? this.initialPosY + 'px'
      : (this.initialPosY + speed) + 'px';

    this.renderer.setElementStyle(this.element, 'backgroundPositionY', pos);
  }
}
