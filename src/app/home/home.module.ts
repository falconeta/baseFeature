import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { HomePage } from './home.page';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  entryComponents:[HomePage],
  declarations: [HomePage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {
  constructor(private injector: Injector) {
    const component = (createCustomElement(HomePage, { injector: this.injector }) as any);
    customElements.define('home-page', component);
  }
  ngDoBootstrap() {
    
  }
}
