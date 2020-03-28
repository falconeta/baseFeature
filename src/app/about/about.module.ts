import { NgModule, Injector, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { AboutPage } from './about.page';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
  ],
  entryComponents:[AboutPage],
  declarations: [AboutPage]
})
export class AboutPageModule {
  constructor(private injector: Injector) {
    const component = (createCustomElement(AboutPage, { injector: this.injector }) as any);
    customElements.define('about-page', component);
  }
  ngDoBootstrap() {
    
  }
}
