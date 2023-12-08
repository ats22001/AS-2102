import '@testing-library/jest-dom'; // Import jest-dom
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import App from '../App';

describe('Quiz App', () => {
  test('Renderring quiz question', () => {
    const { getByText } = render(<App />);
    const questionElement = getByText('Which country is the reigning FIFA World Cup champion? (Soccer)');
    expect(questionElement).toBeInTheDocument();
  });

  test('Select an answer for the first question and the score goes up to 1', () => {
    const { getByText } = render(<App />);
    const correctAnswerButton = getByText('Argentina');
    fireEvent.click(correctAnswerButton);
    const scoreElement = getByText('Points scored: 1');
    expect(scoreElement).toBeInTheDocument();
  });

  // Add more tests for other functionalities in your App.js
});
