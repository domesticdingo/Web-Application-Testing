import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("App renders without crashing", () => {
  render(<App />);
});

test("Scoreboard elements rendering", () => {
  const { getByText } = render(<App />)

  getByText("Balls");
  getByText("Strikes");
  getByText("Outs");
});
