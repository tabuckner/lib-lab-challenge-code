import { render } from '@testing-library/react';

import { MovieDetails } from './movie-details';
import { QueryClientProvider } from '@tanstack/react-query';
import { mockAppQueryClient } from '../../../../../client';

describe('MovieDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QueryClientProvider client={mockAppQueryClient}>
        <MovieDetails movieID='test' onGoBack={() => true} />
      </QueryClientProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
