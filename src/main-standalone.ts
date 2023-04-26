import { provideHttpClient } from '@angular/common/http';
import { NgZone, ɵNoopNgZone as NoopNgZone } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app-routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(appRoutes),

    /**
     * `NgZone` bootstrap options will be added to the `bootstrapApplication` method
     * in the scope of https://github.com/angular/angular/pull/49557
     * 
     * Until that, you can use this hack to use `NoopNgZone`.
     * Note: uncomment `ChangeDetectorRef` patching in the `app.component.ts` for proper work.
     */
    // { provide: NgZone, useClass: NoopNgZone },
  ],
}).catch(error => console.error(error));
