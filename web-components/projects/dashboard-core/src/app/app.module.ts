import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { DashboardRootComponent } from './dashboard-root/dashboard-root.component';

@NgModule({
  declarations: [
    DashboardRootComponent
  ],
  imports: [
    BrowserModule,
  ],
  entryComponents: [
    DashboardRootComponent
  ],
  providers: [],
})
export class AppModule {
  constructor(injector: Injector) {
    const dashboardElement = createCustomElement(DashboardRootComponent, {injector});
    customElements.define('dashboard-root', dashboardElement);
  }
  ngDoBootstrap() {}
}
