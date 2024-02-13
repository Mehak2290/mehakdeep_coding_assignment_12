import React from 'react';
import {Radio Button} from './Radio Button';

export default {
  title: 'Radio Button',
  component:Radio Button,
  argTypes: {
    propertyName: { control: 'text' }, 
  },
};

const Template = (args) => <Label {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  propertyName: 'Default Text',
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  propertyName: 'Disabled Text',
  disabled: true, 
};