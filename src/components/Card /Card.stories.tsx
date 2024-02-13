import React from 'react';
import { Card} from './Card';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    propertyName: { control: 'Card' }, 
  },
};

const Template = (args) => <Card {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  propertyName: 'Default Card',
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  propertyName: 'Disabled Card',
  disabled: true, 
};