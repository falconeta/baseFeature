import { Component, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { NavigationService } from './services/navigation.service';
import { APP_ROUTES } from './constants';
import { NavigationPages } from './enums';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('outlet', { static: true }) routerOutletElement: ElementRef;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private navigationService: NavigationService
  ) {
    this.initializeApp();
  }

  async ngAfterViewInit() {
    await this.navigationService.initRoutes(APP_ROUTES, this.routerOutletElement.nativeElement);
    this.navigationService.setRoot(NavigationPages.HomePage);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
