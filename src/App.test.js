import { render, screen } from '@testing-library/react';
import App from './App';

jest.mock('react-router-dom', () => ({
  BrowserRouter: ({ children }) => <div>{children}</div>,
  Routes: ({ children }) => <div>{children}</div>,
  Route: ({ element }) => element,
  NavLink: ({ children, to }) => <a href={to}>{children}</a>,
  Link: ({ children, to }) => <a href={to}>{children}</a>,
  Navigate: () => null,
}));

test('renders header and hotel content', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: 'mapp' })).toBeInTheDocument();
  expect(screen.getAllByRole('heading', { name: 'hotel mapp' }).length).toBeGreaterThan(0);
});
