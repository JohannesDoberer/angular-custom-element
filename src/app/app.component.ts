import { Component } from '@angular/core';
import { LuigiElement } from '@luigi-project/client/luigi-element'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends LuigiElement {
  title = 'my-element';
  constructor() {
    super();
    console.log('FT from angular webcomponent', this.LuigiClient.getActiveFeatureToggles());
  }
}
