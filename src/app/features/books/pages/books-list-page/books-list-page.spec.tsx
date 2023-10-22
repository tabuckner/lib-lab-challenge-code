import { render } from '@testing-library/react';

import { BooksListPage } from './books-list-page';
import { QueryClientProvider } from '@tanstack/react-query';
import { mockAppQueryClient } from '../../../../../client';

describe('BooksListPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QueryClientProvider client={mockAppQueryClient}>
        <BooksListPage />
      </QueryClientProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
