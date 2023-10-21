import { render } from '@testing-library/react';

import MovieDetailsPage from './movie-details-page';

describe('MovieDetailsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MovieDetailsPage />);
    expect(baseElement).toBeTruthy();
  });
});
