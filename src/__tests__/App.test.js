import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from './App';

describe("App", () => {
  test('renders App component', async () => {
    render(<App />);
//screen literally means look what's on this screen. This checks for the text of the nav header

    expect(screen.queryByText(/Taking Inventory/)).toBeInTheDocument() //equivalent of Cypress 'should have'

    }
  )}
  )
