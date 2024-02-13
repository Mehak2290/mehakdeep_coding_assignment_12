import React from 'react';
import { render, screen } from '@testing-library/react';
import {Radio button} from './Radio button.tests.tsx';

test('Radio button is visible', () => {
  render(<Radio button />);
  const Radio button = screen.getByTestId('id_2'); 
  expect(Radio button).toBeInTheDocument();
});


test('Background color changes in the disabled state', () => {
    render(<Radio button disabled />);
    const Radio button = screen.getByTestId('id_2'); 
    expect(Radio button).toHaveStyle('background-color: gray'); 
  });