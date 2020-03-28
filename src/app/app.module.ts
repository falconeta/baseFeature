import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { IonicModule } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';
import { HomePageModule } from './home/home.module';
import { AboutPageModule } from './about/about.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), HomePageModule, AboutPageModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    StatusBar,
    SplashScreen
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
