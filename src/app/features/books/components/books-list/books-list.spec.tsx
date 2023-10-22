import { render } from '@testing-library/react';
import { BooksList } from './books-list';
import { QueryClientProvider } from '@tanstack/react-query';
import { mockAppQueryClient } from '../../../../../client';

describe('BooksList', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QueryClientProvider client={mockAppQueryClient}>
        <BooksList />
      </QueryClientProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
