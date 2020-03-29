import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { NavigationPages } from '../enums';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class AboutPage {

  constructor(
    private navigationService: NavigationService
  ) { }

  goToHome() {
    this.navigationService.setRoot(NavigationPages.HomePage);
  }
}
