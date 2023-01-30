import { Component } from '@angular/core';
import { FooType } from '@shared/data-access';

@Component({
  selector: 'mobile-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  fooInstance: FooType = {
    id: 0,
    name: 'Foo',
    description: 'Mobile Foo'
  }

  constructor() {}
}
