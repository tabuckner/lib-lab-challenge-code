import { render } from '@testing-library/react';

import { MovieListItem } from './movie-list-item';
import { Movie } from '../../types';

describe('MovieListItem', () => {
  it('should render successfully', () => {
    const mockMovie = {} as Movie;
    const { baseElement } = render(<MovieListItem movie={mockMovie} />);
    expect(baseElement).toBeTruthy();
  });
});
