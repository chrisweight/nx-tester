import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooViewComponent } from './foo-view/foo-view.component';
import { BarViewComponent } from './bar-view/bar-view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FooViewComponent, BarViewComponent],
  exports: [FooViewComponent, BarViewComponent],
})
export class SharedUiModule {}
