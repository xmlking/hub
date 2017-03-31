import {
  Directive, EventEmitter, Output, OnDestroy, ElementRef, Input, AfterViewInit, Inject,
  Renderer, OnInit
} from '@angular/core';

import {Subscription} from 'rxjs/Subscription';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/debounceTime';
import {ScrollSpyService} from 'ng2-scrollspy';
import {WindowService} from '../../../core/services/window.service';
import {DOCUMENT} from '@angular/platform-browser';

export interface ScrollSpyViewportOptions {
  className?: string;
  debounce?: number;
  cushion?: number;
  fullyInView?: boolean;
}
@Directive({
  selector: '[scrollSpyViewport]',
})
export class ScrollSpyViewportDirective implements OnInit, OnDestroy, AfterViewInit {

  private sub: Subscription;
  private element: HTMLElement;

  @Input('scrollSpyViewport') public options: ScrollSpyViewportOptions;
  @Output() onVisibilityChange: EventEmitter<boolean> = new EventEmitter();

  private defaultOptions: ScrollSpyViewportOptions = {
    className: undefined,
    debounce: 0,
    cushion: 0,
    fullyInView: false
  };

  constructor(private scrollSpyService: ScrollSpyService, elementRef: ElementRef,
              @Inject(DOCUMENT) private _document: any, private renderer: Renderer,
              @Inject(WindowService) private _window: any) {
    this.element = elementRef.nativeElement;
  }

  ngOnInit() {
    if (!this.options) {
      this.options = this.defaultOptions;
    } else {
      this.options = Object.assign(this.defaultOptions, this.options);
    }
  }

  ngAfterViewInit() {
    this.sub = this.scrollSpyService.getObservable('window')
      // .debounce(this.options.debounce)
      .map(() => this.isElementInViewport())
      .distinctUntilChanged()
      .subscribe((inView: boolean) => {
        this.onVisibilityChange.emit(inView);
        if (this.options.className) {
          this.renderer.setElementClass(this.element, this.options.className, inView);
        }
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  private isElementInViewport() {
    let rect = this.element.getBoundingClientRect();
    const html = this._document.documentElement;

    if (this.options.cushion !== 0) {
      rect = this.addCushion(rect, this.options.cushion);
    }
    if (this.options.fullyInView === true) {
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (this._window.innerHeight || html.clientHeight) &&
        rect.right <= (this._window.innerWidth || html.clientWidth)
      );
    } else {
      return (
        rect.bottom >= 0 &&
        rect.right >= 0 &&
        rect.top <= (this._window.innerHeight || html.clientHeight) &&
        rect.left <= (this._window.innerWidth || html.clientWidth)
      );
    }
  }

  /**
   *  If a cushion is specified, the properties are adjusted according to the cushion amount.
   *  If the cushion is positive the rectangle will represent an area that is larger that the actual element.
   *  If the cushion is negative then the rectangle will represent an area that is smaller that the actual element.
   */
  private addCushion(rect: ClientRect, cushion: number) {
    return {
      right: rect.right + cushion,
      left: rect.left - cushion,
      top: rect.top - cushion,
      bottom: rect.bottom + cushion,
      get width() {return this.right - this.left; },
      get height() {return this.bottom - this.top; },
    };
  }


}
