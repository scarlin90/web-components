import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ApplicationRef, isDevMode } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';

@NgModule({
  declarations: [DashboardRootComponent],
  imports: [
    BrowserModule,
  ],
  providers: [],
  entryComponents: [DashboardRootComponent],
})
export class AppModule {
  constructor(injector: Injector) {
    if (!isDevMode()) {
      const dashboardElement = createCustomElement(DashboardRootComponent, {injector});
      customElements.define('dashboard-root', dashboardElement);
    }
  }

  ngDoBootstrap(app: ApplicationRef) {
    if (isDevMode()) {
        app.bootstrap(DashboardRootComponent);
    }
  }
}
