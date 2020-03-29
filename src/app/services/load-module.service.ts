import { Injectable, NgModuleFactoryLoader, Injector, NgModuleRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadModuleService {

  constructor(
    private loader: NgModuleFactoryLoader,
    private injector: Injector
  ) {
  }

  public async loadModule(moduleName: string): Promise<NgModuleRef<any>> {
    console.log(moduleName);
    const moduleFactory = await this.loader.load(moduleName);
    try {
      return moduleFactory.create(this.injector);
    } catch (error) {
      throw new Error(`Module ${moduleName} has already loaded`);
    }
  }
}