import { Component, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Router} from '@vaadin/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('outlet', { static: true }) routerOutletElement: ElementRef;
  private routerOutlet: Router;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  ngAfterViewInit(): void {
    this.routerOutlet = new Router(this.routerOutletElement.nativeElement);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.routerOutlet.setRoutes([
        {path: '/', component: 'home-page'},
        {path: '/about', component: 'about-page'}
      ]);

      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
