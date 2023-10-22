import { render } from '@testing-library/react';

import MovieDetails from './movie-details';

describe('MovieDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovieDetails />);
    expect(baseElement).toBeTruthy();
  });
});
