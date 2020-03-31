import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { Camera } from '@ionic-native/camera/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot()],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader },
    StatusBar,
    SplashScreen,
    Camera
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
  constructor(private injector: Injector) {
  }
  ngDoBootstrap() {
    const component = (createCustomElement(AppComponent, { injector: this.injector }) as any);
    customElements.define('base-feature', component);
  }
}
