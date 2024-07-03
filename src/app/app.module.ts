import { Injector, NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' }],
  entryComponents: [AppComponent]
  // bootstrap: [AppComponent] #comment for normal angular app
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const elem = createCustomElement(AppComponent, { injector: this.injector });
    // @ts-ignore
    if(window.Luigi){
      // @ts-ignore
      window.Luigi._registerWebcomponent(
        // @ts-ignore
        new URL(document.currentScript?.getAttribute('src'), location),
        elem
      );
    }
    else{
      customElements.define('my-webcomponent', elem);
    }
  }
}
