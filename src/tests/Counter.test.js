// import necessary react testing library helpers here
import {render, screen, fireEvent} from '@testing-library/react'
// import the Counter component here
import Counter from '../components/Counter'

beforeEach(() => {
  // Render the Counter component here
  render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const element = screen.getByText(/Counter/i);
  expect(element).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const countValue = screen.getByTestId("count");
  expect(countValue.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countValue = screen.getByTestId("count");
  //const increment = screen.getByText("+");
  const increment = screen.getByRole("button", { name: /\+/i});

  expect(countValue.textContent).toBe("0");
  fireEvent.click(increment);
  expect(countValue.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const countValue = screen.getByTestId("count");
  //const decrement = screen.getByText("-");
  const decrement = screen.getByRole("button", { name: /\-/i});

  expect(countValue.textContent).toBe("0");
  fireEvent.click(decrement);
  expect(countValue.textContent).toBe("-1");
});
