import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { NavigationPages } from '../enums';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class HomePage {

  constructor(private navigationService: NavigationService) {
  }

  goToAbout() {
    this.navigationService.setRoot(NavigationPages.AboutPage);
  }

}
