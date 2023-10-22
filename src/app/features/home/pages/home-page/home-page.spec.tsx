import { render } from '@testing-library/react';

import { HomePage } from './home-page';

const mockedUsedNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockedUsedNavigate,
}));

describe('HomePage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HomePage />);
    expect(baseElement).toBeTruthy();
  });
});
