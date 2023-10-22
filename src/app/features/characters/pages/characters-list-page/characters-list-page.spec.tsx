import { render } from '@testing-library/react';

import { CharactersListPage } from './characters-list-page';
import { QueryClientProvider } from '@tanstack/react-query';
import { mockAppQueryClient } from '../../../../../client';

describe('CharactersListPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <QueryClientProvider client={mockAppQueryClient}>
        <CharactersListPage />
      </QueryClientProvider>
    );
    expect(baseElement).toBeTruthy();
  });
});
