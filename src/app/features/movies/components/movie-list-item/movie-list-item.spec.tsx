import { render } from '@testing-library/react';

import { MovieListItem } from './movie-list-item';
import { Movie } from '../../types';

const mockedUsedNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockedUsedNavigate,
}));

describe('MovieListItem', () => {
  it('should render successfully', () => {
    const mockMovie = {} as Movie;
    const { baseElement } = render(<MovieListItem movie={mockMovie} />);
    expect(baseElement).toBeTruthy();
  });
});
