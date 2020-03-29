import { Injectable } from '@angular/core';
import { Router, Route } from '@vaadin/router';
import { IRoute } from '../interfaces';
import { LoadModuleService } from './load-module.service';
import { NavigationPages } from '../enums/navigation.enum';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private routesLoaded: RouteLoaded[];
  private routerOutlet: Router;
  constructor(private loadModuleService: LoadModuleService) {
    this.routesLoaded = [];
  }

  public async initRoutes(routes: IRoute[], outlet: Node): Promise<void> {
    this.routerOutlet = new Router(outlet);
    await this.routerOutlet.setRoutes(this.handleRoutes(routes));
    this.navigationEventSUB();
  }

  public async setRoot(pageName: NavigationPages): Promise<void> {
    const routeLoaded = this.routesLoaded.find(route => route.path.includes(pageName));
    if (routeLoaded) {
      await this.loadModuleStep(routeLoaded.modulePath);
      routeLoaded.modulePath = '';
      await this.navigateToPath(routeLoaded.path);
    } else {
      throw new Error('page not found');
    }
  }

  private navigationEventSUB() {
    this.routerOutlet.subscribe();
  }

  private navigateToPath(path: string) {
    Router.go(path);
  }

  private async loadModuleStep(modulePath: string) {
    modulePath ? await this.loadModuleService.loadModule(modulePath) : null;
  }

  private handleRoutes(routes: IRoute[]): Route[] {
    return routes.map(routeToLoad => {
      const { route: { path }, modulePath } = routeToLoad;
      this.routesLoaded.push({
        path,
        modulePath
      })
      return routeToLoad.route;
    })
  }
}

interface RouteLoaded {
  path: string;
  modulePath: string;
}