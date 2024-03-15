import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  effect,
  inject,
  viewChild,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent, NavbarComponent } from './shared';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    NavbarComponent,
    RouterOutlet,
  ],
})
export class AppComponent {
  #ngZone = inject(NgZone);
  #cdr = inject(ChangeDetectorRef);

  private readonly pageContainer = viewChild.required<ElementRef<HTMLElement>>('pageContainer');

  constructor() {
    // this.#patchChangeDetectorRef();

    effect(() => {
      // Handle scroll event outside of `NgZone` (https://angular.io/guide/zone).
      // this.#ngZone.runOutsideAngular(() => {
      //   this.pageContainer().nativeElement.addEventListener('scroll', () => {});
      // });
    });
  }

  #patchChangeDetectorRef() {
    /**
     * Make `markForCheck` work the same way as `detectChanges` - mark views as dirty AND perform change detection.
     * It is necessary for `NoopNgZone` mode.
     */
    Object.getPrototypeOf(this.#cdr).markForCheck = function() {
      this.detectChanges();
    };
  }
}
