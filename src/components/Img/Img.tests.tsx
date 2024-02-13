import React from 'react';
import { render, screen } from '@testing-library/react';
import {Img } from './Img.tests.tsx';

test('Table is visible', () => {
  render(<Img />);
  constImg = screen.getByTestId('id_3'); 
  expect(Img).toBeInTheDocument();
});


test('Background color changes in the disabled state', () => {
    render(<Img disabled />);
    constImg = screen.getByTestId('id_3'); 
    expect(Img).toHaveStyle('background-color: gray'); 
  });