import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
  inject,
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
export class AppComponent implements OnInit {
  private readonly ngZone = inject(NgZone);
  private readonly cdr = inject(ChangeDetectorRef);

  @ViewChild('pageContainer', { static: true })
  private readonly pageContainer!: ElementRef<HTMLElement>;

  constructor() {
    // this.patchChangeDetectorRef();
  }

  ngOnInit(): void {
    // Handle scroll event outside of `NgZone` (https://angular.io/guide/zone).
    // this.ngZone.runOutsideAngular(() => {
    //   this.pageContainer.nativeElement.addEventListener('scroll', () => {});
    // });
  }

  private patchChangeDetectorRef(): void {
    /**
     * Make `markForCheck` work the same way as `detectChanges` - mark views as dirty AND perform change detection.
     * It is necessary for `NoopNgZone` mode.
     */
    Object.getPrototypeOf(this.cdr).markForCheck = function() {
      this.detectChanges();
    };
  }
}
