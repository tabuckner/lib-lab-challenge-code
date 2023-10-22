import { render } from '@testing-library/react';

import { App } from './app';

const mockedUsedNavigate = vi.fn();
const mockedUseRoutes = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockedUsedNavigate,
  useRoutes: () => mockedUseRoutes,
}));

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });
});
