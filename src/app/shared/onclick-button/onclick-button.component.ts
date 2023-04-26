import { ChangeDetectionStrategy, Component, ElementRef, NgZone, ViewChild, inject } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-onclick-button',
  templateUrl: './onclick-button.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnclickButtonComponent {
  @ViewChild('button', { static: true })
  private readonly button!: ElementRef<HTMLButtonElement>;

  private readonly ngZone = inject(NgZone);

  ngOnInit(): void {
    /**
     * `onclick` event handler added in the component triggers change detection the same as event binding in the template.
     * 
     * To prevent it we have several options:
     * 1. Use `ChangeDetectionStrategy.OnPush` for the root (or subtree root) component.
     * 2. Add `onclick` handler outside of `NgZone` (https://angular.io/guide/zone).
     * 3. Configure `zone.js` to disable patching of the onProperty APIs (see `zone-config.js` for an example).
     */
    this.addButtonOnclickHandler();

    // Add `onclick` handler outside of NgZone.
    // this.ngZone.runOutsideAngular(() => {
    //   this.addButtonOnclickHandler();
    // });
  }

  private addButtonOnclickHandler(): void {
    this.button.nativeElement.onclick = () => console.log('onclick');
    // this.button.nativeElement.addEventListener('click', () => console.log('onclick'));
  }
}
