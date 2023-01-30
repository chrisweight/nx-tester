import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { BarViewComponent } from './bar-view.component';

export default {
  title: 'BarViewComponent',
  component: BarViewComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<BarViewComponent>;

const Template: Story<BarViewComponent> = (args: BarViewComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}