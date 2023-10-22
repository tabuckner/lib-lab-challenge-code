import { render } from '@testing-library/react';

import { ListItem } from './list-item';

const mockedUsedNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockedUsedNavigate,
}));

describe('ListItem', () => {
  it('should render successfully', () => {
    const mockEntity = { _id: 'test' };
    const mockLabel = 'test';
    const { baseElement } = render(
      <ListItem entity={mockEntity} label={mockLabel} />
    );
    expect(baseElement).toBeTruthy();
  });
});
