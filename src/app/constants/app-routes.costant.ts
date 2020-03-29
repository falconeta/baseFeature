
import { IRoute } from '../interfaces';
import { NavigationPages } from '../enums';

export const APP_ROUTES: IRoute[] = [
  {
    route:
      { path: NavigationPages.HomePage, component: 'home-page' },
    modulePath: 'src/app/home/home.module#HomePageModule'
  },
  {
    route:
      { path: NavigationPages.AboutPage, component: 'about-page' },
    modulePath: 'src/app/about/about.module#AboutPageModule'
  },
  {
    route:
    {
      path: '/', redirect: 'home-page'
    }
  }
]