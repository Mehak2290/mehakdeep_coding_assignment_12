import React from 'react';
import { render, screen } from '@testing-library/react';
import { HeroImage } from './HeroImage.tests.tsx';

test('Hero Image is visible', () => {
  render(<Hero Image />);
  const HeroImage = screen.getByTestId('id_4'); 
  expect(HeroImage).toBeInTheDocument();
});


test('Background color changes in the disabled state', () => {
    render(<Hero Image disabled />);
    const HeroImage = screen.getByTestId('id_4'); 
    expect(HeroImage).toHaveStyle('background-color: gray'); 
  });