import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationRef, DoBootstrap, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { appRoutes } from './app-routes';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    AppComponent,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [provideHttpClient(withInterceptorsFromDi())],
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef) {
    // Bootstrap standalone application.
    appRef.bootstrap(AppComponent);
  }
}
