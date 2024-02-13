import React from 'react';
import { render, screen } from '@testing-library/react';
import { Card } from './Card.tests.tsx';

test('Card is visible', () => {
  render(<Card />);
  const Card = screen.getByTestId('id_4'); 
  expect(Card).toBeInTheDocument();
});


test('Background color changes in the disabled state', () => {
    render(<Card disabled />);
    const Card = screen.getByTestId('id_4'); 
    expect(Card).toHaveStyle('background-color: gray'); 
  });