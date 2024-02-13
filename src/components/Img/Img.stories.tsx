import React from 'react';
import { Img} from './Img';

export default {
  title: 'Img',
  component: Img,
  argTypes: {
    propertyName: { control: 'text' }, 
  },
};

const Template = (args) => <Img {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  propertyName: 'Default Text',
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  propertyName: 'Disabled Text',
  disabled: true, 
};