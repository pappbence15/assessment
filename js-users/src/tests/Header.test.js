import { render, screen } from '@testing-library/react';
import Header from "../components/Header";

test('Header renders title', () => {
  render(<Header/>);
  const headerTitle = screen.getByText(/Users/i);
  expect(headerTitle).toBeInTheDocument();
});

test('Header renders addNewUserButton', () => {
  render(<Header/>);
  const addNewUserButton = screen.getByTestId("addNewUserButton")
  expect(addNewUserButton).toBeInTheDocument();
});

test('Header home icon has the right href', () => {
  render(<Header/>);
  const homeIcon = screen.getByTestId("homeIcon")
  expect(homeIcon.href).toBe("http://localhost/")
})