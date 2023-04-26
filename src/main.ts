import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

platformBrowserDynamic()
  .bootstrapModule(AppModule, {
    // https://angular.io/api/core/BootstrapOptions#ngZone
    // ngZone: 'noop', // Note: uncomment `ChangeDetectorRef` patching in the `app.component.ts` for proper work.

    // https://angular.io/api/core/BootstrapOptions#ngZoneEventCoalescing
    // ngZoneEventCoalescing: true,

    // https://angular.io/api/core/BootstrapOptions#ngZoneRunCoalescing
    // ngZoneRunCoalescing: true,
}).catch(error => console.error(error));
