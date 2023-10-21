import { render } from '@testing-library/react';

import MovieListItem from './movie-list-item';

describe('MovieListItem', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovieListItem />);
    expect(baseElement).toBeTruthy();
  });
});
