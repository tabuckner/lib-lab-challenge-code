import { render } from '@testing-library/react';

import { AppShell } from './app-shell';

const mockedUsedNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockedUsedNavigate,
}));

describe('AppShell', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AppShell children={<div></div>} />);
    expect(baseElement).toBeTruthy();
  });
});
