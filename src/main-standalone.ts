import { provideHttpClient } from '@angular/common/http';
import { NgZone, ɵNoopNgZone as NoopNgZone, provideZoneChangeDetection } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app-routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes),
    provideZoneChangeDetection({
      // https://angular.io/api/core/BootstrapOptions#ngZoneEventCoalescing
      // eventCoalescing: true,

      // https://angular.io/api/core/BootstrapOptions#ngZoneRunCoalescing
      // runCoalescing: true,
    }),

    /**
     * Hack to use `NoopNgZone` with `bootstrapApplication` method.
     * https://angular.io/api/core/BootstrapOptions#ngZone
     * Note: uncomment `ChangeDetectorRef` patching in the `app.component.ts` for proper work.
     */
    // { provide: NgZone, useClass: NoopNgZone },
  ],
}).catch(error => console.error(error));
