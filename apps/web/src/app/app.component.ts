import { Component } from '@angular/core';
import { FooType } from '@shared/data-access';

@Component({
  selector: 'web-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  fooInstance: FooType = {
    id: 0,
    name: 'Foo',
    description: 'Web Foo'
  }
}
