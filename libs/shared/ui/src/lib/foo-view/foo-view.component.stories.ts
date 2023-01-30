import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FooViewComponent } from './foo-view.component';

export default {
  title: 'FooViewComponent',
  component: FooViewComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
  argTypes: {
    entity: { control: 'object' }
  }
} as Meta<FooViewComponent>;

const Template: Story<FooViewComponent> = (args: FooViewComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
  entity: {
    id: 0,
    name: 'Storybook Foo Name',
    description: 'Storybook Foo Description'
  }
}
