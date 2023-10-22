import { render } from '@testing-library/react';

import { QuoteDetails } from './quote-details';
import { mockAppQueryClient } from '../../../../../client';
import { QueryClientProvider } from '@tanstack/react-query';

const mockedUsedNavigate = vi.fn();

vi.mock('react-router-dom', () => ({
  useNavigate: () => mockedUsedNavigate,
}));

describe('QuoteDetails', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QueryClientProvider client={mockAppQueryClient}>
        <QuoteDetails quoteID="test" />
      </QueryClientProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
