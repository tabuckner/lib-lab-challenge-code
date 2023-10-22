import { render } from '@testing-library/react';

import { QuotesListPage } from './quotes-list-page';
import { QueryClientProvider } from '@tanstack/react-query';
import { mockAppQueryClient } from '../../../../../client';

describe('QuotesListPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
    <QueryClientProvider client={mockAppQueryClient}>
      <QuotesListPage />
    </QueryClientProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
