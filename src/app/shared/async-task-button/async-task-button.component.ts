import { ChangeDetectionStrategy, Component, NgZone, inject } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-async-task-button',
  templateUrl: './async-task-button.component.html',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AsyncTaskButtonComponent {
  private readonly ngZone = inject(NgZone);

  /**
   * Async tasks (`setTimeout`, `requestAnimationFrame`, `Promise.then()`, etc.)
   * triggers change detection (if the default `ChangeDetectionStrategy` is used).
   * 
   * To prevent it we have several options:
   * 1. Use `ChangeDetectionStrategy.OnPush` for the root component.
   * 2. Schedule the tasks outside of `NgZone` (https://angular.io/guide/zone).
   * 3. Configure `zone.js` to disable patching of the appropriate tasks (see `zone-config.js` for an example).
   */
  onClick(): void {
    this.scheduleAsyncTasks();

    // Schedule the tasks outside of NgZone.
    // this.ngZone.runOutsideAngular(() => {
    //   this.scheduleAsyncTasks();
    // });
  }

  private scheduleAsyncTasks(): void {
    setTimeout(() => {});
    requestAnimationFrame(() => {});
  }
}
