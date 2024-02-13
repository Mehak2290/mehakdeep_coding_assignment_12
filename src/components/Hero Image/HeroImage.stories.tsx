import React from 'react';
import { HeroImage} from './HeroImage';

export default {
  title: 'HeroImage',
  component: HeroImage,
  argTypes: {
    propertyName: { control: 'HeroImage' }, 
  },
};

const Template = (args) => <HeroImage {...args} />;

export const DefaultState = Template.bind({});
DefaultState.args = {
  propertyName: 'Default HeroImage',
};

export const DisabledState = Template.bind({});
DisabledState.args = {
  propertyName: 'Disabled HeroImage',
  disabled: true, 
};