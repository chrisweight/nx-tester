import { FooType } from '@shared/data-access';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'shared-ui-foo-view',
  templateUrl: './foo-view.component.html',
  styleUrls: ['./foo-view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FooViewComponent {
  @Input() entity?: FooType;
}
