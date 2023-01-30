import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooViewComponent } from './foo-view/foo-view.component';

@NgModule({
  imports: [CommonModule],
  declarations: [FooViewComponent],
  exports: [FooViewComponent]
})
export class SharedUiModule {}
