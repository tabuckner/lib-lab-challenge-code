import { render } from '@testing-library/react';

import { MoviesListPage } from './movies-list-page';
import { QueryClientProvider } from '@tanstack/react-query';
import { mockAppQueryClient } from '../../../../../client';

describe('MoviesListPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QueryClientProvider client={mockAppQueryClient}>
        <MoviesListPage />
      </QueryClientProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
