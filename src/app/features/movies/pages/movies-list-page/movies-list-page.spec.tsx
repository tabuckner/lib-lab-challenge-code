import { render } from '@testing-library/react';

import { MoviesListPage } from './movies-list-page';

describe('MoviesListPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MoviesListPage />);
    expect(baseElement).toBeTruthy();
  });
});
