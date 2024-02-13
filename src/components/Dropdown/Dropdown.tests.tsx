import React from 'react';
import { render, screen } from '@testing-library/react';
import { Dropdown } from './Dropdown.tests.tsx';

test('Dropdown is visible', () => {
  render(<Dropdown />);
  const Dropdown = screen.getByTestId('id_1'); 
  expect(Dropdown).toBeInTheDocument();
});


test('Background color changes in the disabled state', () => {
    render(<Dropdown disabled />);
    const Dropdown = screen.getByTestId('id_1'); 
    expect(Dropdown).toHaveStyle('background-color: gray'); 
  });