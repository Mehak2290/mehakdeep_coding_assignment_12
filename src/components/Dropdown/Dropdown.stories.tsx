import React from 'react';
import { Dropdown} from './Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
  argTypes: {
    propertyName: { control: 'text' }, 
  },
};

const Template = (args) => <Dropdown {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  propertyName: 'Default Text',
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  propertyName: 'Disabled Text',
  disabled: true, 
};
